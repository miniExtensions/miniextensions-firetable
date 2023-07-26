"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeApiRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const state_1 = require("../state");
const executeApiRequest = async (args) => {
    var _a, _b;
    try {
        const input = args.method === 'GET' ? args.queryParams : args.body;
        const baseUrl = (0, state_1.getState)().baseUrl;
        const url = `${baseUrl}/api/firetable/v1?route=${encodeURIComponent(args.route)}${args.method === 'GET' && Object.keys(args.queryParams).length > 0
            ? '&executeApiRequestQueryParams=' +
                encodeURIComponent(JSON.stringify(args.queryParams))
            : ''}`;
        const methodPart = !args.method || args.method === 'POST'
            ? {
                method: (_a = args.method) !== null && _a !== void 0 ? _a : 'POST',
                data: input,
            }
            : {
                method: (_b = args.method) !== null && _b !== void 0 ? _b : 'GET',
            };
        const response = await (0, axios_1.default)(Object.assign(Object.assign({}, methodPart), { url, headers: {
                'Content-Type': 'text/plain',
            } }));
        if (response != null && response.status === 200) {
            const data = response.data;
            if (data.error === true) {
                throw new Error(data.message);
            }
            else {
                return {
                    type: 'success',
                    data,
                };
            }
        }
        else {
            throw new Error('Request failed. Please try again.');
        }
    }
    catch (e) {
        return {
            type: 'error',
            message: e.message,
        };
    }
};
exports.executeApiRequest = executeApiRequest;
//# sourceMappingURL=index.js.map