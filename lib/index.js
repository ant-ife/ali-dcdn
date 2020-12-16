'use strict';

const Client = require('./client');
const Actions = require('./actions');

/** Class representing a DCDNClient. */
class DCDNClient {
  /**
   * Initializes a new instance of the DCDNClient class.
   * @param {object} [options] - The parameter options
   * @param {string} [options.endpoint] - The name of the accelerated domain name. You can specify only one domain name.
   * @param {string} [options.accessKeyId] - The AccessKey ID provided to you by Alibaba Cloud.
   * @param {string} [options.accessKeySecret] - The AccessKey Secret provided to you by Alibaba Cloud.
   * @param {string} [options.apiVersion] - The version number of the API.
   * @param {string} [options.signatureMethod] - The encryption method of the signature string.
   * @param {string} [options.signatureVersion] - The version of the signature algorithm.
   */
  constructor(options) {
    this.client = new Client(options);
    this.actions = new Actions(this);
  }
}

module.exports = DCDNClient;
