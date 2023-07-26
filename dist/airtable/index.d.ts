import { ListRecordsFilter, ListRecordsSort } from '../api/routes/listRecords';
import { AirtableRecord } from './types';
export declare const fetchRecord: <T extends object>(args: {
    tableId: string;
    recordId: string;
}) => Promise<AirtableRecord<T>>;
export declare const listRecords: <T extends object>(args: {
    tableId: string;
    offset?: string;
    sort?: ListRecordsSort;
    filter?: ListRecordsFilter;
}) => Promise<{
    offset: string | null;
    records: AirtableRecord<T>[];
}>;
export declare const createRecord: <T extends object>(args: {
    tableId: string;
    fields: T;
}) => Promise<AirtableRecord<T>>;
export declare const updateRecord: <T extends object>(args: {
    tableId: string;
    record: AirtableRecord<T>;
}) => Promise<AirtableRecord<T>>;
export declare const deleteRecord: (args: {
    tableId: string;
    recordId: string;
}) => Promise<void>;
//# sourceMappingURL=index.d.ts.map