### STAGE 1:BUILD ###
FROM node:16.16-alpine AS node
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install --force
RUN npm run build --prod


### STAGE 2:RUN ###
FROM nginx:alpine 

COPY --from=node /Kaddem-Angular/dist/angular-product-config /usr/share/nginx/html
