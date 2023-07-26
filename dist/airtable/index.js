"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.listRecords = exports.fetchRecord = void 0;
const api_1 = require("../api");
const types_1 = require("../api/types");
const state_1 = require("../state");
const fetchRecord = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    const { sessionToken } = state;
    if (!sessionToken)
        throw new Error('No logged in user');
    const { tableId, recordId } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.fetchRecord,
        body: { publicKey, tableId, recordId, sessionToken },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    return result.data.record;
};
exports.fetchRecord = fetchRecord;
const listRecords = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    const { sessionToken } = state;
    if (!sessionToken)
        throw new Error('No logged in user');
    const { tableId, offset, sort, filter } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.listRecords,
        body: {
            publicKey,
            tableId,
            sessionToken,
            offset: offset !== null && offset !== void 0 ? offset : null,
            sort: sort !== null && sort !== void 0 ? sort : null,
            filter: filter !== null && filter !== void 0 ? filter : null,
        },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    return {
        offset: result.data.offset,
        records: result.data.records,
    };
};
exports.listRecords = listRecords;
const createRecord = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    const { sessionToken } = state;
    if (!sessionToken)
        throw new Error('No logged in user');
    const { tableId } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.createRecord,
        body: { publicKey, tableId, fields: args.fields, sessionToken },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    return result.data.record;
};
exports.createRecord = createRecord;
const updateRecord = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    const { sessionToken } = state;
    if (!sessionToken)
        throw new Error('No logged in user');
    const { tableId } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.updateRecord,
        body: { publicKey, tableId, record: args.record, sessionToken },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    return result.data.record;
};
exports.updateRecord = updateRecord;
const deleteRecord = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const { sessionToken } = state;
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    if (!sessionToken)
        throw new Error('No logged in user');
    const { tableId } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.deleteRecord,
        body: { publicKey, tableId, recordId: args.recordId, sessionToken },
    });
    if (result.type === 'error')
        throw new Error(result.message);
};
exports.deleteRecord = deleteRecord;
//# sourceMappingURL=index.js.map