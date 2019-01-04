import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1>Account {authUser.email}</h1>
        <PasswordForgetForm/>
        <PasswordChangeForm/>
    </div>
);

export default AccountPage;