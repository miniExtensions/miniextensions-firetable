import { Attachment, Collaborator } from 'airtable';

export type AirtableRecord<T extends object> = {
    id: string;
    fields: T;
};

export type AirtableValue =
    | undefined
    | string
    | number
    | boolean
    | Collaborator
    | ReadonlyArray<Collaborator>
    | ReadonlyArray<string>
    | ReadonlyArray<Attachment>;
