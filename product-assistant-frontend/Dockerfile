# Use a Node 22 base image
FROM node:22

# Installing Docker containers dependencies
RUN apt-get update -qq \
    && apt-get install -y nodejs \
    ca-certificates \
    curl \
    git \
    yarn \
    sudo \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Setting working directory.
WORKDIR /workspaces/product-assistant-frontend

# Copy the root folder to the docker container.
COPY package.json package-lock.json .

# Install node dependencies
RUN yarn install

# Keep the node_modules folder. This prevents to re-run yarn install or npm install
VOLUME /workspaces/product-assistant-frontend/node_modules
