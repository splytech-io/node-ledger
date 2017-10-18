import * as config from '@rainder/config';
import * as request from 'request-promise';

const CONFIG = config.init({
  HOST: 'ledger.host',
});

export interface IListEndpointRequestQuery {
  limit: number;
  skip: number;
  sort: string;
  fields: string;
  conditions: string;
  agg: string;
}

export interface ITransaction {
  utid: string;

  spec: {
    amount: number;
    type?: string;
  };

  metdata: any;
}

export interface IRequestOptions {
  body?: any;
  query?: IListEndpointRequestQuery;
}

/**
 *
 * @param {string} method
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function makeRequest(method: string, endpoint: string, options: IRequestOptions) {
  return request({
    method: method,
    url: `${CONFIG.HOST}${endpoint}`,
    json: true,
    body: options.body,
    qs: options.query,
  });
}

/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function get(endpoint: string, options?: IRequestOptions) {
  return makeRequest('GET', endpoint, options);
}

/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function post(endpoint: string, options: IRequestOptions) {
  return makeRequest('POST', endpoint, options);
}

/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function remove(endpoint: string, options: IRequestOptions) {
  return makeRequest('DELETE', endpoint, options);
}

/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function patch(endpoint: string, options: IRequestOptions) {
  return makeRequest('PATCH', endpoint, options);
}

/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
export function put(endpoint: string, options: IRequestOptions) {
  return makeRequest('PUT', endpoint, options);
}

export const transactions = {
  create: (walletId: string, body: ITransaction) => {
    return post(`/v1/wallets/${walletId}/transactions`, { body });
  },
  list: (walletId: string, query: IListEndpointRequestQuery) => {
    return get(`/v1/wallets/${walletId}/transactions`, { query });
  },
  get: (walletId: string, transactionId: string) => {
    return get(`/v1/wallets/${walletId}/transactions/${transactionId}`);
  },
};
