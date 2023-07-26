import { FiretableUser } from '../../auth/types';

export type ChangeUserPasswordInput = {
    publicKey: string;
    sessionToken: string;
    existingPassword: string;
    newPassword: string;
};

export type ChangeUserPasswordOutput = {
    user: FiretableUser;
    sessionToken: string;
};
