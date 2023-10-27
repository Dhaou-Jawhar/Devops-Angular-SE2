# stage 1
FROM node:14 as node

WORKDIR /Kaddem-Angular

COPY . .

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod
RUN npm install @angular/cli

# stage 2
FROM nginx:alpine

COPY --from=node /Kaddem-Angular/dist/angular-product-config /usr/share/nginx/html

COPY --from=node /Kaddem-Angular/src/app/app-routing.module.ts /usr/share/nginx/html/app-routing.module.ts
