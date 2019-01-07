import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>La pagina principal es accessible para cada usuario logueado.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);