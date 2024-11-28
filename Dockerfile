FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to optimize caching
COPY package*.json ./

# Install dependencies (use --production for production builds)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
