import { styled } from 'styled-components';

export const OwnerHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OwnerInfoContainer = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 8px;
`;

export const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OwnerContent = styled.p`
  color: var(--dark);
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
`;

export const GistTitle = styled.span`
  font-weight: 600;
`;

export const LighterText = styled.p`
  color: #7A7A7A
`;

export const GistActionsContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const GistAction = styled.div`
  display: flex;
  border: 1px solid var(--dark);
  border-radius: 4px;
  align-items: center;
  font-weight: 600;
  cursor: pointer;

  svg {
    fill: #FFF;
    stroke: #FFF;
  }
`;

export const GistActionImage = styled.span`
  background-color: var(--dark);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const GistActionContent = styled.span`
  padding: 8px 12px;
  color: var(--dark);
`;

export const GistActionText = styled.span`
  color: #FFF;
`