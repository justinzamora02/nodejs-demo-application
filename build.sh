#! /bin/sh

NODE_VERSION=$(cat .nvmrc | sed 's/v//g')
BASE_IMAGE="node:$NODE_VERSION-alpine"

IMAGE_REGISTRY=justinzamora02
IMAGE_NAME=$(basename $(pwd))
IMAGE_TAG=$(git rev-parse HEAD)

docker build \
  --build-arg BASE_IMAGE="$BASE_IMAGE" \
  -t "$IMAGE_REGISTRY/$IMAGE_NAME:$IMAGE_TAG" \
  .