import { styled } from 'styled-components';

export const HomePageContainer = styled.div`
  padding: 0 8rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-items: end;
`;

export const ViewButtonsContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #E3E3E3;
`;

export const ViewButton = styled.span<{ selected?: boolean; }>`
  padding: 8px 12px 6px;

  ${({ selected }) => selected ? `
    background-color: #E3E3E3;

    svg {
      fill: var(--dark);
    }
  ` : `
    svg {
      fill: #B7B7B7;
    }  
  `}
`;

export const HomePageHeader = styled.h2`
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
`;
