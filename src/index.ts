import { setState } from './state';
import { FiretableConfig } from './types';
import {
    getCurrentUser,
    loginWithEmail,
    signupWithEmail,
    logoutFromFiretable,
    validateSession,
} from './auth';
import {
    fetchRecord,
    listRecords,
    createRecord,
    updateRecord,
    deleteRecord,
} from './airtable';

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
    signupWithEmail,
    logoutFromFiretable,
    validateSession,
    fetchRecord,
    listRecords,
    createRecord,
    updateRecord,
    deleteRecord,
};
