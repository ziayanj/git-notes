import { styled } from 'styled-components';

export const TableActionsContainer = styled.div`
  display: flex;
  column-gap: 1rem;

  svg {
    fill: var(--dark);
  }
`;

export const OwnerContainer = styled.span`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
`;

export const OwnerImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
