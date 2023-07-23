import { getState, setState } from '../state';
import { FiretableUser } from './types';

export const getCurrentUser = async (): Promise<FiretableUser> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    if (!state.currentUser) throw new Error('No user logged in');

    return state.currentUser;
};

export const validateSession = async (args: {
    sessionToken: string;
}): Promise<{ user: FiretableUser }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    if (state.sessionToken) throw new Error('Already logged in');

    const { sessionToken } = args;

    // STOPSHIP: make api request to validate session

    return {
        user: {
            email,
            displayName: null,
            photoURL: null,
            uid: '123',
        },
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

    const { sessionToken } = state;

    if (sessionToken) throw new Error('No session to logout from');

    // STOPSHIP: make api request to clear session

    setState({
        ...getState(),
        sessionToken: null,
    });
};
