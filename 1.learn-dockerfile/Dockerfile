# Use an existing image as base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]

# Steps on your terminal
# - Simple build just run `docker build .`
# - Build using tag, run `docker build -t {your docker username}/{repository / project name}:{version e.g latest} .`

# Build new image using docker commit
# - Simple build just run `docker commit -c 'CMD ["redis-server"]' {container id}`
# - If you are a Windows Users, you may get an error like "/bin/sh:[redis-server]: not found" or "No such container"
#   - Instead, try using: `docker commit -c "CMD 'redis-server'" {container id}`