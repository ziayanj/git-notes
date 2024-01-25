import { styled } from 'styled-components';

export const GistContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA
`;

export const GistContentHeader = styled.div`
  padding: 10px;
  color: var(--dark);
  font-size: 11px;
  border: 1px solid #EFEFEF;
`;

export const GistContentDetails = styled.div`
  padding: 1rem;
  overflow-wrap: break-word;
`;
