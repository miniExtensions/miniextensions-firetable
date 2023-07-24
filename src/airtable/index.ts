import { executeApiRequest } from '../api';
import {
    CreateRecordInput,
    CreateRecordOutput,
} from '../api/routes/createRecord';
import {
    DeleteRecordInput,
    DeleteRecordOutput,
} from '../api/routes/deleteRecord';
import { FetchRecordInput, FetchRecordOutput } from '../api/routes/fetchRecord';
import {
    ListRecordsFilter,
    ListRecordsInput,
    ListRecordsOutput,
    ListRecordsSort,
} from '../api/routes/listRecords';
import {
    UpdateRecordInput,
    UpdateRecordOutput,
} from '../api/routes/updateRecord';
import { FireTableAPIRoute } from '../api/types';
import { getPublicKeyFromState, getState } from '../state';
import { AirtableRecord } from './types';

export const fetchRecord = async <T extends object>(args: {
    tableId: string;
    recordId: string;
}): Promise<AirtableRecord<T>> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const publicKey = getPublicKeyFromState(state);

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No logged in user');

    const { tableId, recordId } = args;

    const result = await executeApiRequest<
        FetchRecordInput,
        FetchRecordOutput<T>
    >({
        route: FireTableAPIRoute.fetchRecord,
        body: { publicKey, tableId, recordId, sessionToken },
    });

    if (result.type === 'error') throw new Error(result.message);

    return result.data.record;
};

export const listRecords = async <T extends object>(args: {
    tableId: string;
    offset?: string;
    sort?: ListRecordsSort;
    filter?: ListRecordsFilter;
}): Promise<{
    offset: string | null;
    records: AirtableRecord<T>[];
}> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const publicKey = getPublicKeyFromState(state);

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No logged in user');

    const { tableId, offset, sort, filter } = args;

    const result = await executeApiRequest<
        ListRecordsInput,
        ListRecordsOutput<T>
    >({
        route: FireTableAPIRoute.listRecords,
        body: {
            publicKey,
            tableId,
            sessionToken,
            offset: offset ?? null,
            sort: sort ?? null,
            filter: filter ?? null,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    return {
        offset: result.data.offset,
        records: result.data.records,
    };
};

export const createRecord = async <T extends object>(args: {
    tableId: string;
    fields: T;
}): Promise<AirtableRecord<T>> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const publicKey = getPublicKeyFromState(state);

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No logged in user');

    const { tableId } = args;

    const result = await executeApiRequest<
        CreateRecordInput<T>,
        CreateRecordOutput<T>
    >({
        route: FireTableAPIRoute.createRecord,
        body: { publicKey, tableId, fields: args.fields, sessionToken },
    });

    if (result.type === 'error') throw new Error(result.message);

    return result.data.record;
};

export const updateRecord = async <T extends object>(args: {
    tableId: string;
    record: AirtableRecord<T>;
}): Promise<AirtableRecord<T>> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const publicKey = getPublicKeyFromState(state);

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No logged in user');

    const { tableId } = args;

    const result = await executeApiRequest<
        UpdateRecordInput<T>,
        UpdateRecordOutput<T>
    >({
        route: FireTableAPIRoute.updateRecord,
        body: { publicKey, tableId, record: args.record, sessionToken },
    });

    if (result.type === 'error') throw new Error(result.message);

    return result.data.record;
};

export const deleteRecord = async (args: {
    tableId: string;
    recordId: string;
}): Promise<void> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { sessionToken } = state;

    const publicKey = getPublicKeyFromState(state);

    if (!sessionToken) throw new Error('No logged in user');

    const { tableId } = args;

    const result = await executeApiRequest<
        DeleteRecordInput,
        DeleteRecordOutput
    >({
        route: FireTableAPIRoute.deleteRecord,
        body: { publicKey, tableId, recordId: args.recordId, sessionToken },
    });

    if (result.type === 'error') throw new Error(result.message);
};
