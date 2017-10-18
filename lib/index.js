"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("@rainder/config");
const request = require("request-promise");
const CONFIG = config.init({
    HOST: 'ledger.host',
});
/**
 *
 * @param {string} method
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function makeRequest(method, endpoint, options) {
    return request({
        method: method,
        url: `${CONFIG.HOST}${endpoint}`,
        json: true,
        body: options.body,
        qs: options.query,
    });
}
exports.makeRequest = makeRequest;
/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function get(endpoint, options) {
    return makeRequest('GET', endpoint, options);
}
exports.get = get;
/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function post(endpoint, options) {
    return makeRequest('POST', endpoint, options);
}
exports.post = post;
/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function remove(endpoint, options) {
    return makeRequest('DELETE', endpoint, options);
}
exports.remove = remove;
/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function patch(endpoint, options) {
    return makeRequest('PATCH', endpoint, options);
}
exports.patch = patch;
/**
 *
 * @param {string} endpoint
 * @param {IRequestOptions} options
 * @returns {requestPromise.RequestPromise}
 */
function put(endpoint, options) {
    return makeRequest('PUT', endpoint, options);
}
exports.put = put;
exports.transactions = {
    create: (walletId, body) => {
        return post(`/v1/wallets/${walletId}/transactions`, { body });
    },
    list: (walletId, query) => {
        return get(`/v1/wallets/${walletId}/transactions`, { query });
    },
    get: (walletId, transactionId) => {
        return get(`/v1/wallets/${walletId}/transactions/${transactionId}`);
    },
};
//# sourceMappingURL=index.js.map