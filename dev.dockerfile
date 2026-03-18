FROM python:3.14

# Instalación de dependencias del sistema y Node.js 22
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    gnupg \
    sudo \
    libpq5 \
    openssl \
    imagemagick \
    libvips \
    tzdata \
    postgresql-client \
 && mkdir -p /etc/apt/keyrings \
 && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
 && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
 && apt-get update \
 && apt-get install nodejs -y \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /product-assistant