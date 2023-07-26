import { AirtableRecord } from '../../airtable/types';
export type UpdateRecordInput<T extends object> = {
    publicKey: string;
    tableId: string;
    sessionToken: string;
    record: AirtableRecord<T>;
};
export type UpdateRecordOutput<T extends object> = {
    record: AirtableRecord<T>;
};
//# sourceMappingURL=updateRecord.d.ts.map