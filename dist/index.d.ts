import { FiretableConfig } from './types';
import { getCurrentUser, loginWithEmail, signupWithEmail, logoutFromFiretable, validateSession } from './auth';
import { fetchRecord, listRecords, createRecord, updateRecord, deleteRecord } from './airtable';
import { FiretableUser } from './auth/types';
import { firetableUsersFieldName } from './firetableUsersFieldName';
declare const initializeApp: (args: {
    config: FiretableConfig;
    apiBaseUrlOverride?: string;
}) => void;
export { initializeApp, getCurrentUser, loginWithEmail, signupWithEmail, logoutFromFiretable, validateSession, fetchRecord, listRecords, createRecord, updateRecord, deleteRecord, firetableUsersFieldName, FiretableUser, };
//# sourceMappingURL=index.d.ts.map