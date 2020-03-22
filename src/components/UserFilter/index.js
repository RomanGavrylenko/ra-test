import React from 'react';
import { Filter, TextInput } from 'react-admin';

const UserFilters = (props) => (
  <Filter {...props}>
      <TextInput label="Search name" source="q" alwaysOn />
  </Filter>
);

export default UserFilters;