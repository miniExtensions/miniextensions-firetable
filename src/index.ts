import { setState } from './state';
import { FiretableConfig } from './types';
import { getCurrentUser, loginWithEmail, logoutFromFiretable } from './auth';

const initializeApp = (args: { config: FiretableConfig }): void => {
    setState({
        config: args.config,
        sessionToken: null,
        currentUser: null,
    });
};

export { initializeApp, getCurrentUser, loginWithEmail, logoutFromFiretable };
