import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data';
import UserList from 'components/UserList'

const dataProvider = fakeRestProvider(data, true);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
