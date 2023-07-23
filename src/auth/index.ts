import { getState, setState } from '../state';
import { FiretableUser } from './types';

export const getLoggedInUser = async (args: {
    email: string;
    password: string;
}): Promise<{ user: FiretableUser; sessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { publicKey } = state.config;
    const { email, password } = args;

    // STOPSHIP: make api request to login

    return {
        user: {
            email,
            displayName: null,
            photoURL: null,
            uid: '123',
        },
        sessionToken: '123',
    };
};

export const loginWithEmail = async (args: {
    email: string;
    password: string;
}): Promise<{ user: FiretableUser; sessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { publicKey } = state.config;
    const { email, password } = args;

    // STOPSHIP: make api request to login

    return {
        user: {
            email,
            displayName: null,
            photoURL: null,
            uid: '123',
        },
        sessionToken: '123',
    };
};

export const logoutFromFiretable = (): void => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    const lastSessionToken = state.lastSessionToken;

    if (!lastSessionToken) throw new Error('No session to logout from');

    // STOPSHIP: make api request to clear session

    setState({
        ...getState(),
        lastSessionToken: null,
    });
};
