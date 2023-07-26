import { Attachment, Collaborator } from 'airtable';
export type AirtableRecord<T extends object> = {
    id: string;
    fields: T;
};
export type AirtableCollaborator = Collaborator;
export type AirtableAttachment = Attachment;
//# sourceMappingURL=types.d.ts.map