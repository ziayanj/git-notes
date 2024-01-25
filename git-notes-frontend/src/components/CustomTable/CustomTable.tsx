import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const CustomTable = ({ ...otherProps }) => {
  return (
    <CustomTableContainer {...otherProps} />
  );
} ;

const CustomTableContainer = styled(Table)`
  td {
    cursor: pointer;
  }
`;

export default CustomTable;
