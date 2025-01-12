FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# Expose to 3000 so our container only accessible from port 3000
EXPOSE 3000 
# Copy our custom nginx default.conf to replace default nginx setup
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html