import { AirtableRecord } from '../../airtable/types';

export type CreateRecordInput<T extends object> = {
    tableId: string;
    fields: T;
    sessionToken: string;
};

export type CreateRecordOutput<T extends object> = {
    record: AirtableRecord<T>;
};
