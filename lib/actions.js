'use strict';

/** Class representing a Actions. */
class Actions {
  /**
   * Create a Actions.
   * @param {object} [options] - The parameter options
   * @param {Client} [options.client] - The client to connect to DCDN.
   */
  constructor(options) {
    this.client = options.client;
  }

  /**
   * Queries configurations of a specified accelerated domain name.
   * You can query the configurations of one or more features in each call.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130625.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainConfigs(params) {
    return this.client.request('DescribeDcdnDomainConfigs', params);
  }

  /**
   * Deletes configurations of one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130631.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async batchDeleteDcdnDomainConfigs(params) {
    return this.client.request('BatchDeleteDcdnDomainConfigs', params);
  }

  /**
   * Configures one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130632.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async batchSetDcdnDomainConfigs(params) {
    return this.client.request('BatchSetDcdnDomainConfigs', params);
  }

  /**
   * Deletes configurations of a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130633.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.ConfigId] - The configuration ID.
   * @return {promise} - A promise is returned
   */
  async deleteDcdnSpecificConfig(params) {
    return this.client.request('DeleteDcdnSpecificConfig', params);
  }

  /**
   * Queries page view (PV) statistics.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130614.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainPvData(params) {
    return this.client.request('DescribeDcdnDomainPvData', params);
  }

  /**
   * Queries the total number and proportions of the returned HTTP status codes for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130623.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainHttpCodeData(params) {
    return this.client.request('DescribeDcdnDomainHttpCodeData', params);
  }

  /**
   * Queries and sorts frequently requested web pages on a specified day for
   * a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130624.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.SortBy] - The sorting method.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainTopReferVisit(params) {
    return this.client.request('DescribeDcdnDomainHttpCodeData', params);
  }

  /**
   * Queries the unique visitor (UV) data of a specified accelerated domain
   * or all the accelerated domains under your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130635.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainUvData(params) {
    return this.client.request('DescribeDcdnDomainUvData', params);
  }

  /**
   * Queries the geographic distribution of users for a specified accelerated
   * domain or all the accelerated domains under your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130638.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRegionData(params) {
    return this.client.request('DescribeDcdnDomainRegionData', params);
  }

  /**
   * Queries the top N accelerated domain names that are ranked by network traffic.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130639.htm doc}
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {number} [params.Limit] - The maximum number of domain names to return.
   * @return {promise} - A promise is returned
   */
  async describeDcdnTopDomainsByFlow(params) {
    return this.client.request('DescribeDcdnTopDomainsByFlow', params);
  }

  /**
   * Queries the cache hit ratios of a specified accelerated domain or
   * all the accelerated domains under your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130640.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainHitRateData(params) {
    return this.client.request('DescribeDcdnDomainHitRateData', params);
  }

  /**
   * Queries frequently requested URLs of a specified accelerated domain on a specific day.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130641.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.SortBy] - The method that is used to sort the returned URLs.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainTopUrlVisit(params) {
    return this.client.request('DescribeDcdnDomainTopUrlVisit', params);
  }

  /**
   * Queries the resource quotas and the used resources.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131072.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeDcdnUserQuota(params) {
    return this.client.request('DescribeDcdnUserQuota', params);
  }

  /**
   * Queries the monitoring data of back-to-origin traffic for one or more
   * specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131073.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeSrcTrafficData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeSrcTrafficData', params);
  }

  /**
   * Queries the number of queries per second (QPS) for one or more
   * specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131074.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeQpsData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeQpsData', params);
  }

  /**
   * Queries the bandwidth data of the back-to-origin requests for
   * one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131075.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeSrcBpsData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeSrcBpsData', params);
  }

  /**
   * Queries the total number of HTTP status codes and the proportion of each
   * HTTP status code for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131076.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeHttpCodeData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeHttpCodeData', params);
  }

  /**
   * Queries byte hit ratios for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131077.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeByteHitRateData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeByteHitRateData', params);
  }

  /**
   * Queries the bandwidth data of one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131079.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeBpsData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeBpsData', params);
  }

  /**
   * Queries request hit ratios for one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131080.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainRealTimeReqHitRateData(params) {
    return this.client.request('DescribeDcdnDomainRealTimeReqHitRateData', params);
  }

  /**
   * Queries the proportions of the data usage of the requests that were
   * initiated through different Internet service providers (ISPs) for one or
   * more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131401.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainIspData(params) {
    return this.client.request('DescribeDcdnDomainIspData', params);
  }

  /**
   * Queries the number of queries per second (QPS) for one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131645.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainQpsData(params) {
    return this.client.request('DescribeDcdnDomainQpsData', params);
  }

  /**
   * Queries the bandwidth data for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131646.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainBpsData(params) {
    return this.client.request('DescribeDcdnDomainBpsData', params);
  }

  /**
   * Queries network traffic for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131647.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainTrafficData(params) {
    return this.client.request('DescribeDcdnDomainTrafficData', params);
  }

  /**
   * Queries back-to-origin bandwidth for one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131649.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainOriginBpsData(params) {
    return this.client.request('DescribeDcdnDomainOriginBpsData', params);
  }

  /**
   * Queries back-to-origin traffic for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131651.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainOriginTrafficData(params) {
    return this.client.request('DescribeDcdnDomainOriginTrafficData', params);
  }

  /**
   * Queries the total number and proportions of the returned HTTP status
   * codes for accelerated domains that have WebSocket enabled.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131652.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainWebsocketHttpCodeData(params) {
    return this.client.request('DescribeDcdnDomainWebsocketHttpCodeData', params);
  }

  /**
   * Queries the bandwidth data of the WebSocket network for one or more
   * specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131653.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainWebsocketBpsData(params) {
    return this.client.request('DescribeDcdnDomainWebsocketBpsData', params);
  }

  /**
   * Queries the bandwidth data of the Layer-4 accelerated network for one or
   * more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131654.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.TimeMerge] - Specifies whether to automatically calculate the value of the Interval parameter.
   * @param {string} [params.FixTimeGap] - Specifies whether the zero fill is enabled.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainIpaBpsData(params) {
    return this.client.request('DescribeDcdnDomainIpaBpsData', params);
  }

  /**
   * Queries the monitoring data of the WebSocket network traffic for
   * one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131657.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainWebsocketTrafficData(params) {
    return this.client.request('DescribeDcdnDomainWebsocketTrafficData', params);
  }

  /**
   * Queries the monitoring data of Layer-4 network traffic for one or
   * more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131912.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.TimeMerge] - Specifies whether to automatically calculate the value of the Interval parameter.
   * @param {string} [params.FixTimeGap] - Specifies whether the zero fill is enabled.
   * @param {string} [params.Interval] - The data collection interval.
   * @param {string} [params.IspNameEn] - The name of the Internet service provider (ISP).
   * @param {string} [params.LocationNameEn] - The name of the region.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainIpaTrafficData(params) {
    return this.client.request('DescribeDcdnDomainIpaTrafficData', params);
  }

  /**
   * Enables a specified disabled accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130610.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async startDcdnDomain(params) {
    return this.client.request('StartDcdnDomain', params);
  }

  /**
   * Modifies a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130611.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Sources] - The information about the origin address.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.TopLevelDomain] - The top-level domain name.
   * @return {promise} - A promise is returned
   */
  async updateDcdnDomain(params) {
    return this.client.request('UpdateDcdnDomain', params);
  }

  /**
   * Deletes a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130613.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @return {promise} - A promise is returned
   */
  async deleteDcdnDomain(params) {
    return this.client.request('DeleteDcdnDomain', params);
  }

  /**
   * Disables one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130619.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async batchStopDcdnDomain(params) {
    return this.client.request('BatchStopDcdnDomain', params);
  }

  /**
   * Enables multiple disabled accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130621.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async batchStartDcdnDomain(params) {
    return this.client.request('BatchStartDcdnDomain', params);
  }

  /**
   * Disables a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130622.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async stopDcdnDomain(params) {
    return this.client.request('StopDcdnDomain', params);
  }

  /**
   * Creates an accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130628.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Sources] - The information about the origin address.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.CheckUrl] - The URL that is used to test the accessibility of the origin.
   * @param {string} [params.Scope] - The region where your acceleration service is deployed.
   * @param {string} [params.TopLevelDomain] - The top-level domain name.
   * @return {promise} - A promise is returned
   */
  async addDcdnDomain(params) {
    return this.client.request('AddDcdnDomain', params);
  }

  /**
   * Checks whether canonical name (CNAME) records are configured for one or
   * more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131078.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainCname(params) {
    return this.client.request('DescribeDcdnDomainCname', params);
  }

  /**
   * Queries the certificate information about a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131400.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainCertificateInfo(params) {
    return this.client.request('DescribeDcdnDomainCertificateInfo', params);
  }

  /**
   * Enables or disables the Secure Sockets Layer (SSL) certificate for a specified
   * domain name and modify the certificate information
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131404.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.SSLProtocol] - Specifies whether to enable the HTTPS certificate.
   * @param {string} [params.CertName] - The name of the certificate.
   * @param {string} [params.CertType] - The type of the certificate.
   * @param {string} [params.SSLPub] - The content of the certificate.
   * @param {string} [params.SSLPri] - The private key.
   * @param {string} [params.Region] - The region.
   * @param {string} [params.ForceSet] - Specifies whether to check the certificate name for duplicates.
   * @return {promise} - A promise is returned
   */
  async setDcdnDomainCertificate(params) {
    return this.client.request('SetDcdnDomainCertificate', params);
  }

  /**
   * Queries the accelerated domains in your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131406.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {number} [params.PageSize] - The number of entries to return on each page.
   * @param {number} [params.PageNumber] - The number of the page to return.
   * @param {string} [params.DomainStatus] - The domain status.
   * @param {string} [params.DomainSearchType] - The search method.
   * @param {boolean} [params.CheckDomainShow] - Specifies whether to display
   * the domains that are in the checking, check_failed, or configure_failed state.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.ChangeStartTime] - The start time of the update.
   * @param {string} [params.ChangeEndTime] - The end time of the update.
   * @return {promise} - A promise is returned
   */
  async describeDcdnUserDomains(params) {
    return this.client.request('DescribeDcdnUserDomains', params);
  }

  /**
   * Queries the basic information about a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131407.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainDetail(params) {
    return this.client.request('DescribeDcdnDomainDetail', params);
  }

  /**
   * Queries the detailed information about a specified certificate.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131650.htm doc}
   * @param {string} [params.CertName] - The name of the certificate.
   * @return {promise} - A promise is returned
   */
  async describeDcdnCertificateDetail(params) {
    return this.client.request('DescribeDcdnCertificateDetail', params);
  }

  /**
   * Queries the certificates of one or more accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131655.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnCertificateList(params) {
    return this.client.request('DescribeDcdnCertificateList', params);
  }

  /**
   * Proves the ownership of a specified domain name.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/184759.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async verifyDcdnDomainOwner(params) {
    return this.client.request('VerifyDcdnDomainOwner', params);
  }

  /**
   * Queries the ownership verification content.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/184760.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnVerifyContent(params) {
    return this.client.request('DescribeDcdnVerifyContent', params);
  }

  /**
   * Checks whether a specified IP address is assigned to an Alibaba Cloud Dynamic
   * Route for CDN (DCDN) node.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/185022.htm doc}
   * @param {string} [params.IP] - The IP address.
   * @return {promise} - A promise is returned
   */
  async describeDcdnIpInfo(params) {
    return this.client.request('DescribeDcdnIpInfo', params);
  }

  /**
   * Checks whether the Dynamic Route for CDN (DCDN) service is activated and
   * whether your DCDN service has overdue payments.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130617.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeUserDcdnStatus(params) {
    return this.client.request('DescribeUserDcdnStatus', params);
  }

  /**
   * Queries the current resource packages of Dynamic Route for CDN (DCDN) under your account.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131648.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeDcdnUserResourcePackage(params) {
    return this.client.request('DescribeDcdnUserResourcePackage', params);
  }

  /**
   * Queries the status information about the Dynamic Route for CDN (DCDN) service.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131656.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeDcdnService(params) {
    return this.client.request('DescribeDcdnService', params);
  }

  /**
   * Queries the billing records for your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/185023.htm doc}
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnUserBillHistory(params) {
    return this.client.request('DescribeDcdnUserBillHistory', params);
  }

  /**
   * Queries the download address of original logs for a specific domain name.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130642.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {number} [params.PageSize] - The number of entries to return on each page.
   * @param {number} [params.PageNumber] - The number of the page to return.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainLog(params) {
    return this.client.request('DescribeDcdnDomainLog', params);
  }

  /**
   * Queries accelerated domain names based on the certificate information.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/148244.htm doc}
   * @param {number} [params.SSLPub] - The public key of the certificate.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainByCertificate(params) {
    return this.client.request('DescribeDcdnDomainByCertificate', params);
  }

  /**
   * Queries all certificate information for your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/148252.htm doc}
   * @param {number} [params.PageSize] - The number of entries to return on each page.
   * @param {number} [params.PageNumber] - The number of the page to return.
   * @param {number} [params.Keyword] - The keyword to be matched.
   * @return {promise} - A promise is returned
   */
  async describeDcdnHttpsDomainList(params) {
    return this.client.request('DescribeDcdnHttpsDomainList', params);
  }

  /**
   * Configures an HTTPS certificate for one or more accelerated domain names.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/184593.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {number} [params.SSLProtocol] - Specifies whether to enable the HTTPS certificate.
   * @param {number} [params.CertName] - The name of the certificate.
   * @param {number} [params.CertType] - The type of the certificate.
   * @param {number} [params.SSLPub] - The content of the certificate.
   * @param {number} [params.SSLPri] - The private key.
   * @param {number} [params.Region] - The region information.
   * @return {promise} - A promise is returned
   */
  async batchSetDcdnDomainCertificate(params) {
    return this.client.request('BatchSetDcdnDomainCertificate', params);
  }

  /**
   * Creates a certificate signing request (CSR) file.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/184945.htm doc}
   * @param {number} [params.SANs] - The Subject Alternative Names (SANs).
   * @param {number} [params.Organization] - The name of the organization.
   * @param {number} [params.OrganizationUnit] - The name of the organization unit.
   * @param {number} [params.Country] - The country where the organization resides.
   * @param {number} [params.State] - The provincial district.
   * @param {number} [params.City] - The city.
   * @param {number} [params.Email] - The email.
   * @return {promise} - A promise is returned
   */
  async createDcdnCertificateSigningRequest(params) {
    return this.client.request('CreateDcdnCertificateSigningRequest', params);
  }

  /**
   * Configures an SSL certificate for a specified domain name.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/187565.htm doc}
   * @return {promise} - A promise is returned
   */
  async setDcdnDomainCSRCertificate(params) {
    return this.client.request('SetDcdnDomainCSRCertificate', params);
  }

  /**
   * Queries the status information about the refresh or prefetch tasks for
   * a specified domain name.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130615.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.TaskId] - The ID of the task.
   * @param {string} [params.ObjectPath] - The path of the object.
   * @param {number} [params.PageNumber] - The number of the page to return.
   * @param {number} [params.PageSize] - The number of entries to return on each page.
   * @param {string} [params.ObjectType] - The type of the task.
   * @param {string} [params.Status] - The status of the task.
   * @param {string} [params.StartTime] - The beginning of the time range to query.
   * @param {string} [params.EndTime] - The end of the time range to query.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @return {promise} - A promise is returned
   */
  async describeDcdnRefreshTasks(params) {
    return this.client.request('DescribeDcdnRefreshTasks', params);
  }

  /**
   * Refreshes the specified objects on cache nodes.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130620.htm doc}
   * @param {string} [params.ObjectPath] - The path of the objects that you want to refresh.
   * @param {string} [params.ObjectType] - The type of the objects that you want to refresh.
   * @return {promise} - A promise is returned
   */
  async refreshDcdnObjectCaches(params) {
    return this.client.request('RefreshDcdnObjectCaches', params);
  }

  /**
   * Prefetches content from an origin server to L2 cache nodes.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130636.htm doc}
   * @param {string} [params.ObjectPath] - The path of the objects that you want to refresh.
   * @param {string} [params.Area] - The region of cache nodes where you want to store the prefetched objects.
   * @return {promise} - A promise is returned
   */
  async preloadDcdnObjectCaches(params) {
    return this.client.request('PreloadDcdnObjectCaches', params);
  }

  /**
   * You can call this operation to query the daily maximum number and remaining number
   * of the URLs and directories that can be refreshed or prefetched.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131402.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeDcdnRefreshQuota(params) {
    return this.client.request('DescribeDcdnRefreshQuota', params);
  }

  /**
   * Queries configurations for one or more specified accelerated domains.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130609.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnIpaDomainConfigs(params) {
    return this.client.request('DescribeDcdnIpaDomainConfigs', params);
  }

  /**
   * Disables a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130612.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async stopDcdnIpaDomain(params) {
    return this.client.request('StopDcdnIpaDomain', params);
  }

  /**
   * Queries whether the IP Application Accelerator (IPA) service is activated and
   * whether your IPA service has overdue payments.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130616.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeUserDcdnIpaStatus(params) {
    return this.client.request('DescribeUserDcdnIpaStatus', params);
  }

  /**
   * Queries the status of the IP Application Accelerator (IPA) service.
   *
   * @param {object} params - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130618.htm doc}
   * @return {promise} - A promise is returned
   */
  async describeDcdnIpaService(params) {
    return this.client.request('DescribeDcdnIpaService', params);
  }

  /**
   * Changes the acceleration region of a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130626.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Property] - The region where the acceleration service is deployed.
   * @return {promise} - A promise is returned
   */
  async modifyDCdnDomainSchdmByProperty(params) {
    return this.client.request('ModifyDCdnDomainSchdmByProperty', params);
  }

  /**
   * Modifies a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130627.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Sources] - The origin information.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.TopLevelDomain] - The top-level domain name.
   * @return {promise} - A promise is returned
   */
  async updateDcdnIpaDomain(params) {
    return this.client.request('UpdateDcdnIpaDomain', params);
  }

  /**
   * Deletes a specified accelerated domain from IP Application Accelerator (IPA).
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130629.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @return {promise} - A promise is returned
   */
  async deleteDcdnIpaDomain(params) {
    return this.client.request('DeleteDcdnIpaDomain', params);
  }

  /**
   * Enables a specified accelerated domain that is disabled.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130630.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async startDcdnIpaDomain(params) {
    return this.client.request('StartDcdnIpaDomain', params);
  }

  /**
   * Adds a domain to IP Application Accelerator (IPA).
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130634.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Sources] - The information about the origin address.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.CheckUrl] - The URL that is used to test the accessibility of the origin.
   * @param {string} [params.Scope] - The region where your acceleration service is deployed.
   * @param {string} [params.TopLevelDomain] - The top-level domain name.
   * @return {promise} - A promise is returned
   */
  async addDcdnIpaDomain(params) {
    return this.client.request('AddDcdnIpaDomain', params);
  }

  /**
   * Configures features for one or more specified domains that are accelerated by
   * IP Application Accelerator (IPA).
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/130637.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Functions] - The features to configure.
   * @return {promise} - A promise is returned
   */
  async batchSetDcdnIpaDomainConfigs(params) {
    return this.client.request('BatchSetDcdnIpaDomainConfigs', params);
  }

  /**
   * Queries the information about all the domains that are added to
   * IP Application Accelerator (IPA) under your account.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131403.htm doc}
   * @param {number} [params.PageSize] - The number of entries to return on each page.
   * @param {number} [params.PageNumber] - The number of the page to return.
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.DomainStatus] - The domain status.
   * @param {string} [params.DomainSearchType] - The search method.
   * @param {boolean} [params.CheckDomainShow] - Specifies whether to display
   * the domains that are in the checking, check_failed, or configure_failed state.
   * @param {string} [params.ResourceGroupId] - The ID of the resource group.
   * @param {string} [params.FuncId] - The ID of the feature.
   * @param {string} [params.FuncFilter] - The configuration status of the specified feature.
   * @return {promise} - A promise is returned
   */
  async describeDcdnIpaUserDomains(params) {
    return this.client.request('DescribeDcdnIpaUserDomains', params);
  }

  /**
   * Queries the basic information about a specified accelerated domain.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/131405.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @return {promise} - A promise is returned
   */
  async describeDcdnIpaDomainDetail(params) {
    return this.client.request('DescribeDcdnIpaDomainDetail', params);
  }

  /**
   * Specifies or modifies the domain name configuration in the staging environment.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/171144.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.Functions] - A list of features.
   * @return {promise} - A promise is returned
   */
  async setDcdnDomainStagingConfig(params) {
    return this.client.request('SetDcdnDomainStagingConfig', params);
  }

  /**
   * You can call this operation to query the environment configuration (phased release).
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/171143.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async describeDcdnDomainStagingConfig(params) {
    return this.client.request('DescribeDcdnDomainStagingConfig', params);
  }

  /**
   * You can call this operation to delete the configurations of
   * an-accelerated domain name (phased release).
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/171145.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.ConfigId] - The ID of the configuration to be deleted.
   * @return {promise} - A promise is returned
   */
  async deleteDcdnSpecificStagingConfig(params) {
    return this.client.request('DeleteDcdnSpecificStagingConfig', params);
  }

  /**
   * Publishes the Dynamic Route for CDN (DCDN) configurations from
   * the staging environment to the production environment.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/171146.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async publishDcdnStagingConfigToProduction(params) {
    return this.client.request('PublishDcdnStagingConfigToProduction', params);
  }

  /**
   * Rolls back the configurations from the staging environment to the production environment.
   *
   * @param {object} [params] - Request parameters.
   * {@link https://www.alibabacloud.com/help/doc-detail/171147.htm doc}
   * @param {string} [params.DomainName] - The name of the accelerated domain name.
   * @param {string} [params.FunctionNames] - The names of the features to query.
   * @return {promise} - A promise is returned
   */
  async rollbackDcdnStagingConfig(params) {
    return this.client.request('RollbackDcdnStagingConfig', params);
  }
}

module.exports = Actions;
