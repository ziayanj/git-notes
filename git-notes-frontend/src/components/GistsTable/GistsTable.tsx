import React from 'react';
import { useSelector} from 'react-redux';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import CustomTable from '../CustomTable/CustomTable';

import type { GistType } from '../../types/gist.type';
import type { UserType } from '../../types/user.type';
import type { RootState } from '../../redux/store';
import { formatDate, formatTime } from '../../utils/helpers';
import { ReactComponent as StarIcon } from '../../assets/icons/starIcon.svg';
import { ReactComponent as ForkIcon } from '../../assets/icons/forkIcon.svg';

import { OwnerContainer, OwnerImage, TableActionsContainer } from './GistsTable.styles';

const getColumns = (userData: UserType | null): ColumnsType<GistType> => [
  {
    title: 'Name',
    key: 'name',
    render: (_, { owner }) => (
      <OwnerContainer>
        <OwnerImage src={owner.avatar_url} />
        {owner.name || owner.login}
      </OwnerContainer>
    ),
  },
  {
    title: 'Date',
    key: 'date',
    render: (_, { created_at }) => {
      return <span>{formatDate(created_at)}</span>
    },
  },
  {
    title: 'Time',
    key: 'time',
    render: (_, { created_at }) => {
      return <span>{formatTime(created_at)}</span>
    },
  },
  {
    title: 'Keyword',
    key: 'keyword',
  },
  {
    title: 'Notebook Name',
    key: 'notebook_name',
    render: (_, { files }) => {
      return <span>{Object.values(files)[0].filename}</span>
    },
  },
  {
    title: '',
    key: 'actions',
    render: (_, { owner }) => {
      if (!userData) {
        return null;
      }

      return (
        <TableActionsContainer>
          {userData.login !== owner.login && <ForkIcon />}
          <StarIcon />
        </TableActionsContainer>
      );
    },
  },
];

const GistsTable = () => {
  const navigate = useNavigate();
  const gists = useSelector((state: RootState) => state.gists.queriedGists);

  const userData = useSelector((state: RootState) => state.auth.user);

  return (
    <CustomTable
      columns={getColumns(userData)}
      dataSource={gists}
      rowKey='id'
      onRow={(record: GistType, _index: number | undefined) => {
        return {
          onClick: (event: React.MouseEvent<Element, MouseEvent>) => {
            event.stopPropagation();

            navigate(`/gists/${record.id}`);
          },
        };
      }}
    />
  );
};

export default GistsTable;
