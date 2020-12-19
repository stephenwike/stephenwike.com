#!/usr/bin/env pwsh

docker build -t stephenwike/stephenwike:latest ./src/StephenWikeWeb/
docker push stephenwike/stephenwike:latest
