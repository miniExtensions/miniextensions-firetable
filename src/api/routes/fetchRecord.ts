import { AirtableRecord } from '../../airtable/types';

export type FetchRecordInput = {
    tableId: string;
    recordId: string;
    sessionToken: string;
};

export type FetchRecordOutput<T extends object> = {
    record: AirtableRecord<T>;
};
