import { FiretableUser } from '../../auth/types';

export type ValidateSessionInput = {
    sessionToken: string;
};

export type ValidateSessionOutput = {
    user: FiretableUser;
};
