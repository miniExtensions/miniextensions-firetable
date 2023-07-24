import { setState } from './state';
import { FiretableConfig } from './types';
import {
    getCurrentUser,
    loginWithEmail,
    logoutFromFiretable,
    validateSession,
} from './auth';
import { fetchRecord, listRecords, createRecord } from './airtable';

const initializeApp = (args: { config: FiretableConfig }): void => {
    setState({
        config: args.config,
        sessionToken: null,
        currentUser: null,
    });
};

export {
    initializeApp,
    getCurrentUser,
    loginWithEmail,
    logoutFromFiretable,
    validateSession,
    fetchRecord,
    listRecords,
    createRecord,
    updateRecords,
    deleteRecord,
};
