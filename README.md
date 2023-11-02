# k6ToolforAPIAndLoadTesting
k6 Tool for API And Load Testing, Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

## Setup
This project requires an up-to-date version of K6.

## Run local tests
1. For running specfic script `k6 run .\TestScripts\script_01.js`
2. For sensitive information we used the env varibales in commands like 
```
k6 run .\TestScripts\http_post.js --env EMAIL="<email-here>" --env PASSWORD="<password-here>"
```