'use strict';

const assert = require('assert');
const sinon = require('sinon');
const DCDNClient = require('../lib');
const Client = require('../lib/client');

describe('test/client.test.js', function () {
  describe('Client', function () {
    let client;
    const options = {
      accessKeyId: '<accessKeyId>',
      accessKeySecret: '<accessKeySecret>',
      endpoint: '<DCDN endpoint>',
      apiVersion: '2018-01-15',
      signatureMethod: 'HMAC-SHA1',
      signatureVersion: '1.0',
    };

    before(function () {
      client = new Client(options);
    });

    it('constructor', async () => {
      const options = {
        accessKeyId: '<accessKeyId>',
        accessKeySecret: '<accessKeySecret>',
        endpoint: '<DCDN endpoint>',
      };

      const client = new Client(options);
      assert.equal(client.apiVersion, '2018-01-15');
      assert.equal(client.signatureMethod, 'HMAC-SHA1');
      assert.equal(client.signatureVersion, '1.0');
      assert(client.request);
      assert(client._formatParams);
      assert(client._signature);
      assert(client._canonicalizedParams);
      assert(client._buildStringToSign);
    });

    it('request', async () => {
      const method = 'GET';
      const params = { x: 'x' };

      const httpClientRequest = sinon.stub(client.httpClient, 'request').returns({
        status: 200,
        header: {},
        data: {},
      });

      const res = await client.request(method, params);
      assert.deepEqual(res, {});

      httpClientRequest.restore();
    });

    it('_formatParams', async () => {
      const method = 'GET';
      const params = { x: 'x' };

      const _buildStringToSign = sinon.stub(client, '_buildStringToSign').returns('x');
      const _signature = sinon.stub(client, '_signature').returns('x');

      const res = client._formatParams(method, params);
      delete res.SignatureNonce;
      delete res.Timestamp;
      assert.deepEqual(res, {
        Format: 'JSON',
        Version: options.apiVersion,
        AccessKeyId: options.accessKeyId,
        SignatureMethod: options.signatureMethod,
        SignatureVersion: options.signatureVersion,
        Signature: 'x',
        ...params,
      });

      _buildStringToSign.restore();
      _signature.restore();
    });

    it('_signature', async () => {
      const stringToSign = 'test';

      const res = client._signature(stringToSign);
      assert.equal(res, 'OIdFYzLrE0IlemmabJ/ZSHNZsP4=');
    });

    it('_canonicalizedParams', async () => {
      const params = { x: 'x' };

      const res = client._canonicalizedParams(params);
      assert.equal(res, 'x=x');
    });

    it('_buildStringToSign', async () => {
      const method = 'GET';
      const params = { x: 'x' };

      const _canonicalizedParams = sinon.stub(client, '_canonicalizedParams').returns('x=x');

      const res = client._buildStringToSign(method, params);
      assert.equal(res, 'GET&%2F&x%3Dx');

      _canonicalizedParams.restore();
    });
  });

  describe('CDNClient', function () {
    it('constructor', async () => {
      const options = {
        accessKeyId: '<accessKeyId>',
        accessKeySecret: '<accessKeySecret>',
        endpoint: '<DCDN endpoint>',
      };

      const client = new DCDNClient(options);
      assert(client.actions);
    });
  });
});
