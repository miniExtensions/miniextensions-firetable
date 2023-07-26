import { AirtableRecord } from '../../airtable/types';
export type ListRecordsSort = {
    field: string;
    direction: 'asc' | 'desc';
}[];
export type ListRecordsFilter = {
    type: 'formula';
    formula: string;
} | {
    type: 'recordIds';
    recordIds: string[];
};
export type ListRecordsInput = {
    publicKey: string;
    tableId: string;
    sessionToken: string;
    offset: string | null;
    sort: ListRecordsSort | null;
    filter: ListRecordsFilter | null;
};
export type ListRecordsOutput<T extends object> = {
    offset: string | null;
    records: AirtableRecord<T>[];
};
//# sourceMappingURL=listRecords.d.ts.map