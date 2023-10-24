# stage 1
FROM node:14 as node

WORKDIR /Kaddem-Angular

COPY . .

RUN npm cache clean --force
RUN npm install --force --legacy-peer-deps
RUN npm run build --prod

# stage 2
FROM nginx:alpine

COPY --from=node /Kaddem-Angular/dist/angular-product-config /usr/share/nginx/html
