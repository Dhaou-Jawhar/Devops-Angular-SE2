# stage 1
FROM node:latest as node

WORKDIR /Kaddem-Angular

COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine

COPY --from=node /app/dist/angular-product-config /var/lib/jenkins/workspace/DevOps
