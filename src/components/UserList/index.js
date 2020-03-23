import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import UserFilters from 'components/UserFilter';
import UserShow from 'components/UserShow';
import CustomField from 'components/CustomField';

const UserList = props => {
  return (
    <List {...props} filters={<UserFilters />}>
      <Datagrid expand={<UserShow />} rowClick="expand">
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <CustomField source="company.name" label='Company' />
      </Datagrid>
    </List>
  )
}
  

export default UserList