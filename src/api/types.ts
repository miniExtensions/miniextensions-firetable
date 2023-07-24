export enum FireTableAPIRoute {
    createRecord = 'createRecord',
    fetchRecord = 'fetchRecord',
    validateSession = 'validateSession',
    loginWithEmail = 'loginWithEmail',
    signupWithEmail = 'signupWithEmail',
    listRecords = 'listRecords',
    updateRecord = 'updateRecord',
    deleteRecord = 'deleteRecord',
}

export type ExecuteApiRequestResult<Output> =
    | {
          type: 'success';
          data: Output;
          errorMessage?: string; // The latest call failed, but we have previous data that we can use.
      }
    | { type: 'error'; message: string };
