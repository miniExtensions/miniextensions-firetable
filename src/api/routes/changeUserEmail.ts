import { FiretableUser } from '../../auth/types';

export type ChangeUserEmailInput = {
    publicKey: string;
    sessionToken: string;
    password: string;
    newEmail: string;
};

export type ChangeUserEmailOutput = {
    user: FiretableUser;
    sessionToken: string;
};
