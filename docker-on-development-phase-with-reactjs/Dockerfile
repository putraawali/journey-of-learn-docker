# Tag as builder to make multistep build
FROM node:lts-alpine AS builder 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# We don't need all files from our project, on production we only need the build result of our project. Se we only copy the build directory of react app to default nginx html folder
COPY --from=builder /app/build /usr/share/nginx/html

# No need to do any CMD command, nginx images will do the rest