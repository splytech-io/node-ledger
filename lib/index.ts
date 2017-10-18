import * as config from '@rainder/config';
import * as request from 'request-promise';
import { ITransaction } from './transaction.interface';
import { IListEndpointRequestQuery } from './list.interface';

const CONFIG = config.init({
  HOST: 'ledger.host',
});

export interface IRequestOptions {
  body?: any;
  query?: IListEndpointRequestQuery;
}

export function makeRequest(method: string, endpoint: string, options: IRequestOptions) {
  return request({
    method: method,
    url: `${CONFIG.HOST}${endpoint}`,
    json: true,
    body: options.body,
    qs: options.query,
  });
}

export function get(endpoint: string, options?: IRequestOptions) {
  return makeRequest('GET', endpoint, options);
}

export function post(endpoint: string, options: IRequestOptions) {
  return makeRequest('POST', endpoint, options);
}

export function remove(endpoint: string, options: IRequestOptions) {
  return makeRequest('DELETE', endpoint, options);
}

export function patch(endpoint: string, options: IRequestOptions) {
  return makeRequest('PATCH', endpoint, options);
}

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
