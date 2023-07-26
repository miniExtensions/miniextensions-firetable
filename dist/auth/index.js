"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserPassword = exports.changeUserEmail = exports.logoutFromFiretable = exports.signupWithEmail = exports.loginWithEmail = exports.validateSession = exports.getCurrentUser = void 0;
const api_1 = require("../api");
const types_1 = require("../api/types");
const state_1 = require("../state");
const getCurrentUser = () => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    if (!state.currentUser)
        throw new Error('No user logged in');
    return state.currentUser;
};
exports.getCurrentUser = getCurrentUser;
const validateSession = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const publicKey = (0, state_1.getPublicKeyFromState)(state);
    if (state.sessionToken)
        throw new Error('Already logged in');
    const { sessionToken } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.validateSession,
        body: { publicKey, sessionToken },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    const { user } = result.data;
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { currentUser: user, sessionToken }));
    return {
        user,
    };
};
exports.validateSession = validateSession;
const loginWithEmail = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    if (state.sessionToken)
        throw new Error('Already logged in');
    const { publicKey } = state.config;
    const { email, password } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.loginWithEmail,
        body: {
            email,
            password,
            publicKey,
        },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    const { user, sessionToken } = result.data;
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { sessionToken, currentUser: user }));
    return {
        user,
        sessionToken,
    };
};
exports.loginWithEmail = loginWithEmail;
const signupWithEmail = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    if (state.sessionToken)
        throw new Error('Already logged in');
    const { publicKey } = state.config;
    const { email, password } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.signupWithEmail,
        body: {
            email,
            password,
            publicKey,
        },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    const { user, sessionToken } = result.data;
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { sessionToken, currentUser: user }));
    return {
        user,
        sessionToken,
    };
};
exports.signupWithEmail = signupWithEmail;
const logoutFromFiretable = async () => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const { sessionToken } = state;
    if (!sessionToken)
        throw new Error('No session to logout from');
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { sessionToken: null, currentUser: null }));
};
exports.logoutFromFiretable = logoutFromFiretable;
const changeUserEmail = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const { sessionToken: existingSessionToken } = state;
    if (!existingSessionToken)
        throw new Error('No logged in user');
    const { publicKey } = state.config;
    const { newEmail, password } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.changeUserEmail,
        body: {
            newEmail,
            password,
            publicKey,
            sessionToken: existingSessionToken,
        },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    const { updatedUser, newSessionToken } = result.data;
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { currentUser: updatedUser, sessionToken: newSessionToken }));
    return {
        updatedUser,
        newSessionToken,
    };
};
exports.changeUserEmail = changeUserEmail;
const changeUserPassword = async (args) => {
    const state = (0, state_1.getState)();
    if (!state)
        throw new Error('Firetable not initialized');
    const { sessionToken: existingSessionToken } = state;
    if (!existingSessionToken)
        throw new Error('No logged in user');
    const { publicKey } = state.config;
    const { existingPassword, newPassword } = args;
    const result = await (0, api_1.executeApiRequest)({
        route: types_1.FireTableAPIRoute.changeUserPassword,
        body: {
            existingPassword,
            newPassword,
            publicKey,
            sessionToken: existingSessionToken,
        },
    });
    if (result.type === 'error')
        throw new Error(result.message);
    const { newSessionToken } = result.data;
    (0, state_1.setState)(Object.assign(Object.assign({}, (0, state_1.getState)()), { sessionToken: newSessionToken }));
    return {
        newSessionToken,
    };
};
exports.changeUserPassword = changeUserPassword;
//# sourceMappingURL=index.js.map