import { FiretableUser } from './auth/types';
import { FiretableConfig } from './types';
type State = {
    config: FiretableConfig;
    sessionToken: string | null;
    currentUser: FiretableUser | null;
    baseUrl: string;
};
export declare const setState: (newState: State) => void;
export declare const getState: () => State;
export declare const getPublicKeyFromState: (state: State) => string;
export {};
//# sourceMappingURL=state.d.ts.map