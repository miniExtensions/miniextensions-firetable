import { AirtableRecord } from '../../airtable/types';
export type CreateRecordInput<T extends object> = {
    publicKey: string;
    tableId: string;
    fields: T;
    sessionToken: string;
};
export type CreateRecordOutput<T extends object> = {
    record: AirtableRecord<T>;
};
//# sourceMappingURL=createRecord.d.ts.map