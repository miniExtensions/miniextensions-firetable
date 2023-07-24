import { executeApiRequest } from '../api';
import {
    LoginWithEmailInput,
    LoginWithEmailOutput,
} from '../api/routes/loginWithEmail';
import { LogoutInput, LogoutOutput } from '../api/routes/logout';
import {
    ValidateSessionInput,
    ValidateSessionOutput,
} from '../api/routes/validateSession';
import { v1APIRoute } from '../api/types';
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

    const result = await executeApiRequest<
        ValidateSessionInput,
        ValidateSessionOutput
    >({
        route: v1APIRoute.validateSession,
        body: {
            sessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    setState({
        ...getState(),
        sessionToken,
    });

    return {
        user: result.data.user,
    };
};

export const loginWithEmail = async (args: {
    email: string;
    password: string;
}): Promise<{ user: FiretableUser; sessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    if (state.sessionToken) throw new Error('Already logged in');

    const { publicKey } = state.config;
    const { email, password } = args;

    const result = await executeApiRequest<
        LoginWithEmailInput,
        LoginWithEmailOutput
    >({
        route: v1APIRoute.loginWithEmail,
        body: {
            email,
            password,
            publicKey,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    return {
        user: result.data.user,
        sessionToken: result.data.sessionToken,
    };
};

export const logoutFromFiretable = async (): Promise<void> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No session to logout from');

    const result = await executeApiRequest<LogoutInput, LogoutOutput>({
        route: v1APIRoute.logoutFromFiretable,
        body: {
            sessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    setState({
        ...getState(),
        sessionToken: null,
    });
};
