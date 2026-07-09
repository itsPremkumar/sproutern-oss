# Base image using Node 20 mapped to Alpine for a smaller footprint
FROM node:20-alpine

# Install missing OS dependencies, necessary for some Node packages
RUN apk add --no-cache libc6-compat

# Set the working directory inside the container
WORKDIR /app

# Copy dependency definition files
# By copying these first, we make use of Docker's layer caching
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Disable Next.js telemetry during development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose the development port (9002 as configured in package.json dev script)
EXPOSE 9002

# Run the Next.js development server
CMD ["yarn", "dev"]
