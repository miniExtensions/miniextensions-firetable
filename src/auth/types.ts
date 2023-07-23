export type FiretableUser = {
    email: string;
    displayName: string | null;
    photoURL: string | null;
    uid: string; // This is the recordID of the user
};
