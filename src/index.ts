import { setState } from './state';
import { FiretableConfig } from './types';
import {
    getCurrentUser,
    loginWithEmail,
    signupWithEmail,
    logoutFromFiretable,
    validateSession,
    changeUserEmail,
    changeUserPassword,
} from './auth/auth';
import {
    fetchRecord,
    listRecords,
    createRecord,
    updateRecord,
    deleteRecord,
} from './airtable/airtable';
import { FiretableUser } from './auth/types';
import { firetableUsersFieldName } from './firetableUsersFieldName';

const initializeApp = (args: {
    config: FiretableConfig;
    apiBaseUrlOverride?: string;
}): void => {
    setState({
        config: args.config,
        sessionToken: null,
        currentUser: null,
        baseUrl: args.apiBaseUrlOverride ?? 'https://web.miniextensions.com',
    });
};

export {
    initializeApp,
    getCurrentUser,
    loginWithEmail,
    signupWithEmail,
    logoutFromFiretable,
    validateSession,
    changeUserEmail,
    changeUserPassword,
    fetchRecord,
    listRecords,
    createRecord,
    updateRecord,
    deleteRecord,
    firetableUsersFieldName,
    FiretableUser,
};
