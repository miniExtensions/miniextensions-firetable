export type ChangeUserPasswordInput = {
    publicKey: string;
    sessionToken: string;
    existingPassword: string;
    newPassword: string;
};

export type ChangeUserPasswordOutput = {
    sessionToken: string;
};
