## Getting Started

### Add the package

```bash
yarn add miniextensions-firetable
```

or

```bash
npm install miniextensions-firetable
```

### Initialize Firetable

```ts
import { initializeApp } from 'miniextensions-firetable';

initializeApp({
    config: {
        publicKey: 'INSERT_YOUR_PUBLIC_KEY_HERE',
    },
});
```

## Auth

### User Sign up

```ts
const { user, sessionToken } = await signupWithEmail({
    email: 'a@example.com',
    password: '123456789',
});

const userUID = user.uid; // this is the Airtable record ID of the user record.
```

### User Login

```ts
const { user, sessionToken } = await loginWithEmail({
    email: 'a@example.com',
    password: '123456789',
});
```

### Persist Login

To persist login, store `sessionToken` in a cookie or local storage. You can resume a session by calling `validateSession` with the `sessionToken`.

```ts
const { user } = await validateSession({
    sessionToken,
});
```

### User Logout

```ts
await logoutFromFiretable();
```

### Get Current User

You can only get the current user when the user is logged in. Otherwise, it will throw an error.

```ts
const { user } = getCurrentUser();
```

### Change user email

```ts
const { updatedUser, newSessionToken } = await changeUserEmail({
    password: '123456789', // ask the user to enter their password and pass it here.
    newEmail: 'newEmail@example.com',
});

const newEmail = updatedUser.email;
```

Make sure to persist `newSessionToken`. The old session token will no longer work.

### Change user password

```ts
const { newSessionToken } = await changeUserPassword({
    existingPassword: '123456789', // ask the user to enter their existing password and pass it here.
    newPassword: '987654321', // ask the user to enter their new password and pass it here.
});
```

Make sure to persist `newSessionToken`. The old session token will no longer work.

## Records

### Create a record

```ts
type Task = {
    name: string;
    done: boolean;
};

const record = await createRecord<Task>({
    tableId: 'tblXXXXXXXXXXXXXX',
    fields: {
        name: 'My Task',
        done: false,
    },
});

const { name, done } = record.fields;
```

### Fetch a record

```ts
const record = await fetchRecord<Task>({
    tableId: 'tblXXXXXXXXXXXXXX',
    recordId: 'recXXXXXXXXXXXXXX',
});
```

### Update a record

Firetable automatically does a merge when updating records. You should only pass the fields you want to update. Fields that are not passed to `updateRecord` will not be removed. To remove a field, pass `null` as the value.

```ts
const record = await updateRecord<Task>({
    tableId: 'tblXXXXXXXXXXXXXX',
    record: {
        id: 'recXXXXXXXXXXXXXX',
        fields: {
            done: true,
        },
    },
});
```

### Delete a record

```ts
await deleteRecord({
    tableId: 'tblXXXXXXXXXXXXXX',
    recordId: 'recXXXXXXXXXXXXXX',
});
```

### List records

TODO
