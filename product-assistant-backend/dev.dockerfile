FROM python:3.14

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    sudo \
    libpq5 \
    openssl \
    imagemagick \
    libvips \
    tzdata \
    postgresql-client

WORKDIR /langchain
