import { FiretableUser } from './auth/types';
import { FiretableConfig } from './types';

type State = {
    config: FiretableConfig;
    sessionToken: string | null;
    currentUser: FiretableUser | null;
};

let state: State | null = null;

export const setState = (newState: State): void => {
    state = newState;
};

export const getState = (): State => {
    if (!state) throw new Error('Firetable not initialized');
    return state;
};

export const getPublicKeyFromState = (state: State): string => {
    const { config } = state;
    const { publicKey } = config;

    if (!publicKey) throw new Error('No public key found');

    return publicKey;
};
