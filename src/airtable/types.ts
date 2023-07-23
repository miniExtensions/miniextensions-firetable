import { Attachment, Collaborator } from 'airtable';

export type AirtableRecord = {
    id: string;
    fields: {
        [key: string]: AirtableValue;
    };
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
