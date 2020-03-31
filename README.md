# allied

Facade for Allied REST api.

Public / Private Key Required.

## Usage

```js
const config = {
  publicKey: 'PUBLICKEY',
  privateKey: 'PRIVATEKEY',
  api: 'https://api.demo.alliedpayment.com',
  domain: 'ALLIED',
  username: 'support',
  onBehalfOf: undefined, // optional
  useProxy: true,
  proxy: {
    host: 'localhost',
    port: 8888,
    protocol: 'http'
  }
};

const AlliedClient = require('../allied');
const allied = new AlliedClient(config);
const log = require('@alliedpayment/colorized-logger');

const main = async () => {
  try {
    const res = await allied.getVersion();
    log.info(`response status code ${res.status}`);
    return res.data;
  } catch (error) {
    log.error('failed to get version', error);
  }
};

main();
```
