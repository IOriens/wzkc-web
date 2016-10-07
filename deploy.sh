#!/bin/bash

npm run build

git add . --all

git commit -m "update to deploy"

git push -u origin
