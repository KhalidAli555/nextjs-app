# ==========================
# Stage 1: Build the Application
# ==========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# ==========================
# Stage 2: Production
# ==========================
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy application from builder
COPY --from=builder /app .

# Expose application port
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
