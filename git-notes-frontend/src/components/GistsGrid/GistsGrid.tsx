import { useState } from 'react';
import { useSelector} from 'react-redux';
import { Pagination } from 'antd';

import GistCard from '../GistCard/GistCard';

import type { RootState } from '../../redux/store';

import { GistsContainer, GistsGridContainer, PaginationContainer } from './GistsGrid.styles';

const GistsGrid = () => {
  const gists = useSelector((state: RootState) => state.gists.queriedGists);

  const [page, setPage] = useState(1);

  return (
    <GistsGridContainer>
      <GistsContainer>
        {gists.slice((page - 1) * 6, (page - 1) * 6 + 6).map((gist) => <GistCard key={gist.id} gist={gist} />)}
      </GistsContainer>
      
      <PaginationContainer>
        <Pagination
          current={page}
          total={gists.length}
          onChange={setPage}
          defaultPageSize={6}
          hideOnSinglePage
        />
      </PaginationContainer>
    </GistsGridContainer>
  );
};

export default GistsGrid;
