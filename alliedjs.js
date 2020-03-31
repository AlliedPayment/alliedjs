const HttpClient = require('@alliedpayment/http-client');

class Allied {
  constructor(config) {
    if (!config || !config.api) {
      throw new Error('Allied client config is missing');
    }
    this.api = config.api;
    this.client = new HttpClient(config);
  }

  networkReject(id, request) {
    const url = `${this.api}/payments/${id}/networkreject`;
    return this.client.post(url, request);
  }

  getVersion() {
    const url = `${this.api}/version.json`;
    return this.client.get(url);
  }

  getFinancialInstitution(financialInstitutionId, detailed = false) {
    const url = `${this.api}/fis/${financialInstitutionId}?$detailed=${detailed}`;
    return this.client.get(url);
  }

  getFinancialInstitutions() {
    const url = `${this.api}/fis`;
    return this.client.get(url);
  }
}
module.exports = Allied;
