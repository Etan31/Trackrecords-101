# Use Node.js v18 as the base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# copy the package.json on the work directory which is the /app route.
COPY package.json .

RUN npm install

# Copy the all the data within the directory of this Dockerfile and 
# then place it inside the /app route directory
COPY . .

EXPOSE 3000

CMD ["npm", "start"]