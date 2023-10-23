# stage 1
FROM node:14 as node

WORKDIR /Kaddem-Angular

COPY . .

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod

# stage 2
FROM nginx:alpine

COPY --from=node /app/dist/angular-product-config /var/lib/jenkins/workspace/DevOps
