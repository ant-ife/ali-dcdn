'use strict';

const DCDNClient = require('../lib');

const client = new DCDNClient({
  accessKeyId: '<Your accessKeyId>',
  accessKeySecret: '<Your accessKeySecret>',
  endpoint: '<DCDN endpoint>', // e.g.: 'DCDN.aliyuncs.com'
});

(async () => {
  await client.actions.describeDcdnUserQuota({DomainName: '< Your domainName >'});
})();
