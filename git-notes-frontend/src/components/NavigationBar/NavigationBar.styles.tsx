import { Input } from 'antd';
import { styled } from 'styled-components';

export const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);
  padding: 1rem 2rem;
  color: #FFF;
`;

export const NavigationActions = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const NavigationBarSearch = styled(Input)`
  width: 300px;
  background-color: var(--dark);
  border: 1px solid rgba(255, 255, 255, 0.50);
  
  input {
    background-color: var(--dark);
    color: rgba(255, 255, 255, 0.80);

    &::placeholder {
      color: rgba(255, 255, 255, 0.80);
    }
  }
`;

export const UserMenuContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 30px;
  z-index: 1;
  background-color: #FFF;
  border-radius: 4px;
  display: none;
`;

export const UserImageContainer = styled.div`
  color: var(--dark);
  font-weight: 500;

  &:hover ${UserMenuContainer} {
    display: unset;
  }
`;
