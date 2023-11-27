# k6ToolforAPIAndLoadTesting
k6 Tool for API And Load Testing, Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

## Setup or installation
This project requires an up-to-date version of K6. for installation use the following link.
```
https://k6.io/docs/get-started/installation/
```

## Run local tests
1. For running specfic script `k6 run .\Reqres\Resource\get.js`
2. For sensitive information we used the env varibales in commands like 
```
 k6 run .\Reqres\Register\post.js --env USERNAME="<username-here>" --env EMAIL="<email-here>" --env PASSWORD="<password-here>"
```
3. For attach config file, used the following command
```
k6 run .\Reqres\Resource\get.js --config Reqres\config\options.json
```
## Note: Below is the link of api, which are used in this framework.
https://reqres.in/api-docs/