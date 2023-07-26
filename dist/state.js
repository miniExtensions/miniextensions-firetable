"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicKeyFromState = exports.getState = exports.setState = void 0;
let state = null;
const setState = (newState) => {
    state = newState;
};
exports.setState = setState;
const getState = () => {
    if (!state)
        throw new Error('Firetable not initialized');
    return state;
};
exports.getState = getState;
const getPublicKeyFromState = (state) => {
    const { config } = state;
    const { publicKey } = config;
    if (!publicKey)
        throw new Error('No public key found');
    return publicKey;
};
exports.getPublicKeyFromState = getPublicKeyFromState;
//# sourceMappingURL=state.js.map