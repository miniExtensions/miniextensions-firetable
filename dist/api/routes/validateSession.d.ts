import { FiretableUser } from '../../auth/types';
export type ValidateSessionInput = {
    publicKey: string;
    sessionToken: string;
};
export type ValidateSessionOutput = {
    user: FiretableUser;
};
//# sourceMappingURL=validateSession.d.ts.map