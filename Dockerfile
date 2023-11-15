# Stage 1
FROM node:14 as node

WORKDIR /Kaddem-Angular

COPY . /Kaddem-Angular

# Install npm globally and update it to the latest version
RUN npm install -g npm@latest

# Install dependencies and build the Angular app
RUN npm install --force && \
    npm install @angular/cli && \
    npm run build --prod

# Stage 2
FROM nginx:alpine

COPY --from=node /Kaddem-Angular/dist/angular-product-config /usr/share/nginx/html
