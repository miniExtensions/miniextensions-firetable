import { FiretableUser } from '../../auth/types';

export type LoginWithEmailInput = {
    email: string;
    password: string;
    publicKey: string;
};

export type LoginWithEmailOutput = {
    sessionToken: string;
    user: FiretableUser;
};
