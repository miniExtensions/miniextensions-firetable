import { AirtableRecord } from '../../airtable/types';

export type ListRecordsSort = {
    field: string;
    direction: 'asc' | 'desc';
}[];

export type ListRecordsInput = {
    tableId: string;
    sessionToken: string;
    pageSize: number | null;
    maxRecords: number | null;
    offset: string | null;
    view: string | null;
    sort: ListRecordsSort | null;
    filterByFormula: string | null;
};

export type ListRecordsOutput<T extends object> = {
    offset: string | null;
    records: AirtableRecord<T>[];
};
