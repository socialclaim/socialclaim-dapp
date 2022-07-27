<img src="https://svgur.com/i/jYf.svg" width="100"/>

# SocialClaim dapp

## Live version
[socialclaim.nescrypto.com](https://socialclaim.nescrypto.com)

## How to use video
https://www.youtube.com/watch?v=WsTZ4JY_df4&feature=youtu.be

## Project setup
```shell
npm install
```
## ENV variables
```shell
export VUE_APP_SOCIALCLAIM_CONTACT_ADDR="0x000"
export VUE_APP_LINK_CONTRACT_ADDR="0x000"
export VUE_APP_RPC_PROVIDER="https://..."
export VUE_APP_REQUIRED_CHAIN_ID="00"
export VUE_APP_SAMPLE_BSC_REPORT_ADDRESS="0x000"
export VUE_APP_URL="https://..."
export VUE_APP_GTAG="G-XXXXX"
```


### Easy deploy with dokku
```
// On the remote server
dokku apps:create socialclaim
dokku config:set socialclaim NGINX_ROOT=dist
dokku config:set socialclaim VUE_APP_SOCIALCLAIM_CONTACT_ADDR="0x000"
dokku config:set socialclaim VUE_APP_LINK_CONTRACT_ADDR="0x000"
dokku config:set ...

```

### Compiles and minifies for production
```
npm run build
```
