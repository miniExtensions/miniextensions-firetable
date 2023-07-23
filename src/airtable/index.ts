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

    // STOPSHIP: make api request to fetch record

    return {
        id: recordId,
        fields: {} as T,
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

    // STOPSHIP: make api request to fetch record

    return {
        id: 'recordId',
        fields: {} as T,
    };
};
