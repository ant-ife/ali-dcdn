'use strict';

const assert = require('assert');
const sinon = require('sinon');
const Actions = require('../lib/actions');

describe('test/actions.test.js', function () {
  describe('Actions', function () {
    it('constructor', async () => {
      const actions = new Actions({});

      assert(actions.describeDcdnDomainConfigs);
      assert(actions.batchDeleteDcdnDomainConfigs);
      assert(actions.batchSetDcdnDomainConfigs);
      assert(actions.deleteDcdnSpecificConfig);
      assert(actions.describeDcdnDomainPvData);
      assert(actions.describeDcdnDomainHttpCodeData);
      assert(actions.describeDcdnDomainTopReferVisit);
      assert(actions.describeDcdnDomainUvData);
      assert(actions.describeDcdnDomainRegionData);
      assert(actions.describeDcdnTopDomainsByFlow);
      assert(actions.describeDcdnDomainHitRateData);
      assert(actions.describeDcdnDomainTopUrlVisit);
      assert(actions.describeDcdnUserQuota);
      assert(actions.describeDcdnDomainRealTimeSrcTrafficData);
      assert(actions.describeDcdnDomainRealTimeQpsData);
      assert(actions.describeDcdnDomainRealTimeSrcBpsData);
      assert(actions.describeDcdnDomainRealTimeHttpCodeData);
      assert(actions.describeDcdnDomainRealTimeByteHitRateData);
      assert(actions.describeDcdnDomainRealTimeBpsData);
      assert(actions.describeDcdnDomainRealTimeReqHitRateData);
      assert(actions.describeDcdnDomainIspData);
      assert(actions.describeDcdnDomainQpsData);
      assert(actions.describeDcdnDomainBpsData);
      assert(actions.describeDcdnDomainTrafficData);
      assert(actions.describeDcdnDomainOriginBpsData);
      assert(actions.describeDcdnDomainOriginTrafficData);
      assert(actions.describeDcdnDomainWebsocketHttpCodeData);
      assert(actions.describeDcdnDomainWebsocketBpsData);
      assert(actions.describeDcdnDomainIpaBpsData);
      assert(actions.describeDcdnDomainWebsocketTrafficData);
      assert(actions.describeDcdnDomainIpaTrafficData);
      assert(actions.startDcdnDomain);
      assert(actions.updateDcdnDomain);
      assert(actions.deleteDcdnDomain);
      assert(actions.batchStopDcdnDomain);
      assert(actions.batchStartDcdnDomain);
      assert(actions.stopDcdnDomain);
      assert(actions.addDcdnDomain);
      assert(actions.describeDcdnDomainCname);
      assert(actions.describeDcdnDomainCertificateInfo);
      assert(actions.setDcdnDomainCertificate);
      assert(actions.describeDcdnUserDomains);
      assert(actions.describeDcdnDomainDetail);
      assert(actions.describeDcdnCertificateDetail);
      assert(actions.describeDcdnCertificateList);
      assert(actions.verifyDcdnDomainOwner);
      assert(actions.describeDcdnVerifyContent);
      assert(actions.describeDcdnIpInfo);
      assert(actions.describeUserDcdnStatus);
      assert(actions.describeDcdnUserResourcePackage);
      assert(actions.describeDcdnService);
      assert(actions.describeDcdnUserBillHistory);
      assert(actions.describeDcdnDomainLog);
      assert(actions.describeDcdnDomainByCertificate);
      assert(actions.describeDcdnHttpsDomainList);
      assert(actions.batchSetDcdnDomainCertificate);
      assert(actions.createDcdnCertificateSigningRequest);
      assert(actions.setDcdnDomainCSRCertificate);
      assert(actions.describeDcdnRefreshTasks);
      assert(actions.refreshDcdnObjectCaches);
      assert(actions.preloadDcdnObjectCaches);
      assert(actions.describeDcdnRefreshQuota);
      assert(actions.describeDcdnIpaDomainConfigs);
      assert(actions.stopDcdnIpaDomain);
      assert(actions.describeUserDcdnIpaStatus);
      assert(actions.describeDcdnIpaService);
      assert(actions.modifyDCdnDomainSchdmByProperty);
      assert(actions.updateDcdnIpaDomain);
      assert(actions.deleteDcdnIpaDomain);
      assert(actions.startDcdnIpaDomain);
      assert(actions.addDcdnIpaDomain);
      assert(actions.batchSetDcdnIpaDomainConfigs);
      assert(actions.describeDcdnIpaUserDomains);
      assert(actions.describeDcdnIpaDomainDetail);
      assert(actions.setDcdnDomainStagingConfig);
      assert(actions.describeDcdnDomainStagingConfig);
      assert(actions.deleteDcdnSpecificStagingConfig);
      assert(actions.publishDcdnStagingConfigToProduction);
      assert(actions.rollbackDcdnStagingConfig);
    });
  });
});
