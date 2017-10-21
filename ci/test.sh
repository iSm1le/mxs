#!/bin/bash

npm run test
npm run e2e
bash <(curl -s https://codecov.io/bash)
