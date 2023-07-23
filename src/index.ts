import { setState } from './state';
import { FiretableConfig } from './types';
import { getLoggedInUser, loginWithEmail, logoutFromFiretable } from './auth';

const initializeApp = (args: { config: FiretableConfig }): void => {
    setState({
        config: args.config,
        lastSessionToken: null,
        currentUser: null,
    });
};

export { initializeApp, getLoggedInUser, loginWithEmail, logoutFromFiretable };
