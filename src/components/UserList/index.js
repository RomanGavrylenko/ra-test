import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField} from 'react-admin';
import UserFilters from 'components/UserFilter';
import UserShow from 'components/UserShow';

const UserList = props => (
  <List {...props} filters={<UserFilters />}>
      <Datagrid expand={<UserShow />} rowClick="expand">
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <UrlField source="company.name" />
      </Datagrid>
  </List>
);

export default UserList