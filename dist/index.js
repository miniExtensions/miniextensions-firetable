"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firetableUsersFieldName = exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.listRecords = exports.fetchRecord = exports.validateSession = exports.logoutFromFiretable = exports.signupWithEmail = exports.loginWithEmail = exports.getCurrentUser = exports.initializeApp = void 0;
const state_1 = require("./state");
const auth_1 = require("./auth");
Object.defineProperty(exports, "getCurrentUser", { enumerable: true, get: function () { return auth_1.getCurrentUser; } });
Object.defineProperty(exports, "loginWithEmail", { enumerable: true, get: function () { return auth_1.loginWithEmail; } });
Object.defineProperty(exports, "signupWithEmail", { enumerable: true, get: function () { return auth_1.signupWithEmail; } });
Object.defineProperty(exports, "logoutFromFiretable", { enumerable: true, get: function () { return auth_1.logoutFromFiretable; } });
Object.defineProperty(exports, "validateSession", { enumerable: true, get: function () { return auth_1.validateSession; } });
const airtable_1 = require("./airtable");
Object.defineProperty(exports, "fetchRecord", { enumerable: true, get: function () { return airtable_1.fetchRecord; } });
Object.defineProperty(exports, "listRecords", { enumerable: true, get: function () { return airtable_1.listRecords; } });
Object.defineProperty(exports, "createRecord", { enumerable: true, get: function () { return airtable_1.createRecord; } });
Object.defineProperty(exports, "updateRecord", { enumerable: true, get: function () { return airtable_1.updateRecord; } });
Object.defineProperty(exports, "deleteRecord", { enumerable: true, get: function () { return airtable_1.deleteRecord; } });
const firetableUsersFieldName_1 = require("./firetableUsersFieldName");
Object.defineProperty(exports, "firetableUsersFieldName", { enumerable: true, get: function () { return firetableUsersFieldName_1.firetableUsersFieldName; } });
const initializeApp = (args) => {
    var _a;
    (0, state_1.setState)({
        config: args.config,
        sessionToken: null,
        currentUser: null,
        baseUrl: (_a = args.apiBaseUrlOverride) !== null && _a !== void 0 ? _a : 'https://web.miniextensions.com',
    });
};
exports.initializeApp = initializeApp;
//# sourceMappingURL=index.js.map