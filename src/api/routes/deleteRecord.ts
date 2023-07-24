export type DeleteRecordInput = {
    tableId: string;
    sessionToken: string;
    recordId: string;
};

export type DeleteRecordOutput = {
    success: boolean;
};
