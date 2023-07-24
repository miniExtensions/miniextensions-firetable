import { AirtableRecord } from '../../airtable/types';

export type FetchRecordInput = {
    publicKey: string;
    tableId: string;
    recordId: string;
    sessionToken: string;
};

export type FetchRecordOutput<T extends object> = {
    record: AirtableRecord<T>;
};
