import { FiretableUser } from '../../auth/types';
export type SignupWithEmailInput = {
    publicKey: string;
    email: string;
    password: string;
};
export type SignupWithEmailOutput = {
    sessionToken: string;
    user: FiretableUser;
};
//# sourceMappingURL=signupWithEmail.d.ts.map