# Specify a base image. Use NodeJs official image using alpine as base image with nodeJs preinstalled.
FROM node:alpine

# Work Directory inside the container
# WORKDIR instruction will act like cd command on your terminal. Your project to copy will put inside directory specified at WORKDIR command. If your folder doesn't exists inside the container, it will automatically create it.
WORKDIR /usr/app

# COPY instruction is command to tell docker copy from path to folder to copy from on *your machine* (relative to build context), to the container.
# Example: if your Dockerfile is same as your project directory, you can ues ./ instead. If not, just specify it.
# COPY instruction format is `COPY {your project path} {place/path to copy stuff inside the container}`
# COPY ./ ./

# If we trying to update any files, we have to install all dependencies again each build because COPY ./ ./ will detect that some files are changed. To minimize cache busting and get rid of unnecessary process, we can copy just only the package.json first, then run npm install, than copy again the entire file

COPY ./package.json ./

# Install some dependencies of NodeJs project.
RUN npm install

COPY ./ ./

# Default command
CMD [ "npm", "start" ]

# To run web server project, we have to run the image with Port Mapping
# Port Mapping is simply to make our browser on our pc/desktop able to access the network inside the container
# If we do not mapping the port, our computer unable to access the project inside the container cuz it's isolated from the outside container
# To run image with Port Mapping:
# - `docker run -p {port to access from outside the container}:{port used inside the container} {image identifier}`
# Example: `docker run -p 8000:8080 <image id>`
# We can use localhost:8000 on our browser to access our NodeJs project who using port 8080 with that command.