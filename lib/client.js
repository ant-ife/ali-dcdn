'use strict';

const assert = require('assert');
const querystring = require('querystring');
const crypto = require('crypto');
const debug = require('debug')('client');

/** Class representing a Client. */
class Client {
  /**
   * Initializes a new instance of the Client class.
   * @param {object} [options] - The parameter options
   * @param {string} [options.endpoint] - The name of the accelerated domain name. You can specify only one domain name.
   * @param {string} [options.accessKeyId] - The AccessKey ID provided to you by Alibaba Cloud.
   * @param {string} [options.accessKeySecret] - The AccessKey Secret provided to you by Alibaba Cloud.
   * @param {string} [options.apiVersion] - The version number of the API.
   * @param {string} [options.signatureMethod] - The encryption method of the signature string.
   * @param {string} [options.signatureVersion] - The version of the signature algorithm.
   */
  constructor(options) {
    assert(options, 'must pass "options"');
    assert(options.accessKeyId, 'must pass "options.accessKeyId"');
    assert(options.accessKeySecret, 'must pass "options.accessKeySecret"');
    assert(options.endpoint, 'must pass "options.endpoint"');

    this.endpoint = options.endpoint;
    this.accessKeyId = options.accessKeyId;
    this.accessKeySecret = options.accessKeySecret;
    this.apiVersion = options.apiVersion || '2018-01-15';
    this.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
    this.signatureVersion = options.signatureVersion || '1.0';
    this.httpClient = require('urllib');
  }

  /**
   * Make API request.
   * @param {string} action - The name of the operation being performed.
   * @param {object} params - Parameter values.
   * @return {object} - A response data.
   */
  async request(action, params) {
    const method = 'GET';
    params.Action = action;

    const formatParams = this._formatParams(method, params);

    const sanitizedQuery = querystring.stringify(formatParams);
    const url = `${this.endpoint}?${sanitizedQuery}`;

    const options = {
      method,
      dataType: 'json',
      timeout: 30000,
      keepAlive: true,
      keepAliveTimeout: 30000,
      maxSockets: Number.MAX_SAFE_INTEGER,
      maxFreeSockets: 256,
      freeSocketTimeout: 4000,
    };
    debug('url: %s, action: %s, options: %j', url, action, options);

    const {status, headers, data = {}} = await this.httpClient.request(url, options);
    const requestId = data.RequestId;

    debug('status: %s, headers: %j, data: %j', status, headers, data);
    if (status >= 500) {
      const err = new Error(data.Message || `DCDN Server Error, status: ${status}`);
      err.name = 'DCDNServerResponseError';
      err.headers = headers;
      err.requestId = requestId;
      err.data = data;
      throw err;
    } else if (status >= 400) {
      const err = new Error(data.Message || `DCDN Client Error, status: ${status}`);
      err.name = `DCDNClient${data.Code || 'Unknow'}Error`;
      err.headers = headers;
      err.requestId = requestId;
      err.data = data;
      throw err;
    }

    return data;
  }

  /**
   * Format request parameters.
   * @param {string} method - HTTP method used for request submission.
   * @param {object} params - Parameter values.
   * @return {object} - Format parameters.
   */
  _formatParams(method, params) {
    const date = new Date();

    // https://www.alibabacloud.com/help/doc-detail/130705.htm
    const mixParams = {
      Format: 'JSON',
      Version: this.apiVersion,
      AccessKeyId: this.accessKeyId,
      SignatureMethod: this.signatureMethod,
      Timestamp: date.toJSON(),
      SignatureVersion: this.signatureVersion,
      SignatureNonce: date.getTime(),
      ...params,
    };

    const stringToSign = this._buildStringToSign(method, mixParams);
    mixParams.Signature = this._signature(stringToSign);

    return mixParams;
  }

  /**
   * Calculate the signature’s HMAC value based on RFC2104 definitions.
   * @param {string} stringToSign - Canonicalized query string.
   * @return {string} - The signature value.
   */
  _signature(stringToSign) {
    // https://www.alibabacloud.com/help/doc-detail/50286.htm
    return crypto
      .createHmac('sha1', this.accessKeySecret + '&')
      .update(Buffer.from(stringToSign, 'utf8'))
      .digest('base64');
  }

  /**
   * Produce the canonicalized query string.
   * @param {string} params - Parameter values.
   * @return {string} - Canonicalized query string.
   */
  _canonicalizedParams(params) {
    const keys = Object.keys(params).sort();
    const kvs = [];
    for (const k of keys) {
      kvs.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`);
    }

    return kvs.join('&');
  }

  /**
   * Construct the string for signature calculation.
   * @param {string} method - HTTP method used for request submission.
   * @param {string} params - Parameter values.
   * @return {string} - String for signature.
   */
  _buildStringToSign(method, params) {
    const kvs = this._canonicalizedParams(params);
    return method + '&' + encodeURIComponent('/') + '&' + encodeURIComponent(kvs);
  }
}

module.exports = Client;
