# ali-dcdn

<a href="https://npm.im/ali-dcdn"><img src="https://badgen.net/npm/v/ali-dcdn"></a> <a href="https://david-dm.org/ant-ife/ali-dcdn"><img src="https://img.shields.io/david/ant-ife/ali-dcdn.svg?style=flat-square"></a> <a href="https://npm.im/ali-dcdn"><img src="https://badgen.net/npm/dm/ali-dcdn"></a>

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
})().catch((err) => console.error(err));
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
