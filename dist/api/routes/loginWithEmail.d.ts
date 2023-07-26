import { FiretableUser } from '../../auth/types';
export type LoginWithEmailInput = {
    publicKey: string;
    email: string;
    password: string;
};
export type LoginWithEmailOutput = {
    sessionToken: string;
    user: FiretableUser;
};
//# sourceMappingURL=loginWithEmail.d.ts.map