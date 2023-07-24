import { executeApiRequest } from '../api';
import {
    CreateRecordInput,
    CreateRecordOutput,
} from '../api/routes/createRecord';
import { FetchRecordInput, FetchRecordOutput } from '../api/routes/fetchRecord';
import {
    ListRecordsInput,
    ListRecordsOutput,
    ListRecordsSort,
} from '../api/routes/listRecords';
import { v1APIRoute } from '../api/types';
import { getState } from '../state';
import { AirtableRecord } from './types';

export const fetchRecord = async <T extends object>(args: {
    tableId: string;
    recordId: string;
}): Promise<AirtableRecord<T>> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No session to fetch record from');

    const { tableId, recordId } = args;

    const result = await executeApiRequest<
        FetchRecordInput,
        FetchRecordOutput<T>
    >({
        route: v1APIRoute.fetchRecord,
        body: {
            tableId,
            recordId,
            sessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    return result.data.record;
};

export const listRecords = async <T extends object>(args: {
    tableId: string;
    pageSize?: number;
    maxRecords?: number;
    offset?: string;
    view?: string;
    sort?: ListRecordsSort;
    filterByFormula?: string;
}): Promise<{
    offset: string | null;
    records: AirtableRecord<T>[];
}> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No session to fetch record from');

    const {
        tableId,
        pageSize,
        maxRecords,
        offset,
        view,
        sort,
        filterByFormula,
    } = args;

    const result = await executeApiRequest<
        ListRecordsInput,
        ListRecordsOutput<T>
    >({
        route: v1APIRoute.fetchRecord,
        body: {
            tableId,
            sessionToken,
            pageSize: pageSize ?? null,
            maxRecords: maxRecords ?? null,
            offset: offset ?? null,
            view: view ?? null,
            sort: sort ?? null,
            filterByFormula: filterByFormula ?? null,
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

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No session to fetch record from');

    const { tableId } = args;

    const result = await executeApiRequest<
        CreateRecordInput<T>,
        CreateRecordOutput<T>
    >({
        route: v1APIRoute.createRecord,
        body: {
            tableId,
            fields: args.fields,
            sessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    return result.data.record;
};
