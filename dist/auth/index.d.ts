import { FiretableUser } from './types';
export declare const getCurrentUser: () => FiretableUser;
export declare const validateSession: (args: {
    sessionToken: string;
}) => Promise<{
    user: FiretableUser;
}>;
export declare const loginWithEmail: (args: {
    email: string;
    password: string;
}) => Promise<{
    user: FiretableUser;
    sessionToken: string;
}>;
export declare const signupWithEmail: (args: {
    email: string;
    password: string;
}) => Promise<{
    user: FiretableUser;
    sessionToken: string;
}>;
export declare const logoutFromFiretable: () => Promise<void>;
export declare const changeUserEmail: (args: {
    password: string;
    newEmail: string;
}) => Promise<{
    updatedUser: FiretableUser;
    newSessionToken: string;
}>;
export declare const changeUserPassword: (args: {
    existingPassword: string;
    newPassword: string;
}) => Promise<{
    newSessionToken: string;
}>;
//# sourceMappingURL=index.d.ts.map