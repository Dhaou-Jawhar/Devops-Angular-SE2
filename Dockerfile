# stage 1
FROM node:14 as node

WORKDIR /Kaddem-Angular

COPY . /Kaddem-Angular

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod
RUN npm install @angular/cli

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# stage 2
FROM nginx:alpine

COPY --from=node /Kaddem-Angular/dist/angular-product-config /usr/share/nginx/html

EXPOSE 80
