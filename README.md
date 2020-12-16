# ali-dcdn

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/ali-dcdn.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ali-dcdn
[travis-image]: https://img.shields.io/travis/ant-ife/ali-dcdn.svg?style=flat-square
[travis-url]: https://travis-ci.org/ant-ife/ali-dcdn
[codecov-image]: https://codecov.io/github/ant-ife/ali-dcdn/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/ant-ife/ali-dcdn?branch=master
[david-image]: https://img.shields.io/david/ant-ife/ali-dcdn.svg?style=flat-square
[david-url]: https://david-dm.org/ant-ife/ali-dcdn
[download-image]: https://img.shields.io/npm/dm/ali-dcdn.svg?style=flat-square
[download-url]: https://npmjs.org/package/ali-dcdn

Aliyun DCDN client.

## Installation

```shell
$ npm install ali-dcdn
```

## Usage

```js
const DCDNClient = require('ali-dcdn');

const client = new DCDNClient({
  accessKeyId: '<Your accessKeyId>',
  accessKeySecret: '<Your accessKeySecret>',
  endpoint: '<DCDN endpoint>', // e.g.: 'DCDN.aliyuncs.com'
});

(async () => {
  const quota = await client.actions.DescribeDcdnUserQuota({ DomainName: 'Your domainName' });
  console.log('user quota: %j', quota);
})().catch(err => console.error(err));
```

## Documentation

- [Product Introduction Document](https://www.alibabacloud.com/help/doc-detail/64836.htm)
- [API Document](https://www.alibabacloud.com/help/doc-detail/128282.htm)

## Issues

- [Open an issue in GitHub](https://github.com/ant-ife/ali-dcdn/issues)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/ant-ife/ali-dcdn/blob/master/CHANGELOG.md).

## License

[MIT](LICENSE)
