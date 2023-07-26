export declare enum FireTableAPIRoute {
    createRecord = "createRecord",
    fetchRecord = "fetchRecord",
    validateSession = "validateSession",
    loginWithEmail = "loginWithEmail",
    signupWithEmail = "signupWithEmail",
    changeUserPassword = "changeUserPassword",
    changeUserEmail = "changeUserEmail",
    listRecords = "listRecords",
    updateRecord = "updateRecord",
    deleteRecord = "deleteRecord"
}
export type ExecuteApiRequestResult<Output> = {
    type: 'success';
    data: Output;
    errorMessage?: string;
} | {
    type: 'error';
    message: string;
};
//# sourceMappingURL=types.d.ts.map