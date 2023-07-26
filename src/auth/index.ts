import { executeApiRequest } from '../api';
import {
    ChangeUserEmailInput,
    ChangeUserEmailOutput,
} from '../api/routes/changeUserEmail';
import {
    ChangeUserPasswordInput,
    ChangeUserPasswordOutput,
} from '../api/routes/changeUserPassword';
import {
    LoginWithEmailInput,
    LoginWithEmailOutput,
} from '../api/routes/loginWithEmail';
import {
    SignupWithEmailInput,
    SignupWithEmailOutput,
} from '../api/routes/signupWithEmail';
import {
    ValidateSessionInput,
    ValidateSessionOutput,
} from '../api/routes/validateSession';
import { FireTableAPIRoute } from '../api/types';
import { getPublicKeyFromState, getState, setState } from '../state';
import { FiretableUser } from './types';

export const getCurrentUser = (): FiretableUser => {
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

    const publicKey = getPublicKeyFromState(state);

    if (state.sessionToken) throw new Error('Already logged in');

    const { sessionToken } = args;

    const result = await executeApiRequest<
        ValidateSessionInput,
        ValidateSessionOutput
    >({
        route: FireTableAPIRoute.validateSession,
        body: { publicKey, sessionToken },
    });

    if (result.type === 'error') throw new Error(result.message);

    const { user } = result.data;

    setState({
        ...getState(),
        currentUser: user,
        sessionToken,
    });

    return {
        user,
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
        route: FireTableAPIRoute.loginWithEmail,
        body: {
            email,
            password,
            publicKey,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    const { user, sessionToken } = result.data;

    setState({
        ...getState(),
        sessionToken,
        currentUser: user,
    });

    return {
        user,
        sessionToken,
    };
};

export const signupWithEmail = async (args: {
    email: string;
    password: string;
}): Promise<{ user: FiretableUser; sessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    if (state.sessionToken) throw new Error('Already logged in');

    const { publicKey } = state.config;
    const { email, password } = args;

    const result = await executeApiRequest<
        SignupWithEmailInput,
        SignupWithEmailOutput
    >({
        route: FireTableAPIRoute.signupWithEmail,
        body: {
            email,
            password,
            publicKey,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    const { user, sessionToken } = result.data;

    setState({
        ...getState(),
        sessionToken,
        currentUser: user,
    });

    return {
        user,
        sessionToken,
    };
};

export const logoutFromFiretable = async (): Promise<void> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');

    const { sessionToken } = state;

    if (!sessionToken) throw new Error('No session to logout from');

    setState({
        ...getState(),
        sessionToken: null,
        currentUser: null,
    });
};

export const changeUserEmail = async (args: {
    password: string;
    newEmail: string;
}): Promise<{ updatedUser: FiretableUser; newSessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    const { sessionToken: existingSessionToken } = state;
    if (!existingSessionToken) throw new Error('No logged in user');

    const { publicKey } = state.config;
    const { newEmail, password } = args;

    const result = await executeApiRequest<
        ChangeUserEmailInput,
        ChangeUserEmailOutput
    >({
        route: FireTableAPIRoute.changeUserEmail,
        body: {
            newEmail,
            password,
            publicKey,
            sessionToken: existingSessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    const { updatedUser, newSessionToken } = result.data;

    setState({
        ...getState(),
        currentUser: updatedUser,
        sessionToken: newSessionToken,
    });

    return {
        updatedUser,
        newSessionToken,
    };
};

export const changeUserPassword = async (args: {
    existingPassword: string;
    newPassword: string;
}): Promise<{ newSessionToken: string }> => {
    const state = getState();
    if (!state) throw new Error('Firetable not initialized');
    const { sessionToken: existingSessionToken } = state;
    if (!existingSessionToken) throw new Error('No logged in user');

    const { publicKey } = state.config;
    const { existingPassword, newPassword } = args;

    const result = await executeApiRequest<
        ChangeUserPasswordInput,
        ChangeUserPasswordOutput
    >({
        route: FireTableAPIRoute.changeUserPassword,
        body: {
            existingPassword,
            newPassword,
            publicKey,
            sessionToken: existingSessionToken,
        },
    });

    if (result.type === 'error') throw new Error(result.message);

    const { sessionToken: newSessionToken } = result.data;

    setState({
        ...getState(),
        sessionToken: newSessionToken,
    });

    return {
        newSessionToken,
    };
};
