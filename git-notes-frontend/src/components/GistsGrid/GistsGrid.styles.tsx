import { styled } from 'styled-components';

export const GistsGridContainer = styled.div`
  padding-bottom: 4rem;
`;

export const GistsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(200px, 370px));
  padding-bottom: 2rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
`;
