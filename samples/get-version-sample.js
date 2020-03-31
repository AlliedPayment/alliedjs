const config = {
  publicKey: 'TODO',
  privateKey: 'TODO',
  api: 'https://api.alliedpayment.com',
  domain: 'ALLIED',
  username: 'support',
  onBehalfOf: undefined,
  useProxy: true,
  proxy: {
    host: 'localhost',
    port: 8888,
    protocol: 'http'
  }
};

const AlliedClient = require('../alliedjs');
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
