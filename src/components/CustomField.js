import React from 'react';
import get from 'lodash/get';

const CustomField = ({ source, record = {} }) => {
  return (
    <a href={`https://${record.website}`} target="_blank" rel='noopener noreferrer'>
      {get(record, source)}
    </a>
  )
}

export default CustomField;