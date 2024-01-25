import { styled } from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);

  a {
    text-decoration: none;
    color: inherit
  }
`;

export const UserMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #EFEFEF;
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #EFEFEF;
`;

export const SmallText = styled.span`
  font-size: 11px;
  color: #3D3D3D;
`;

export const UsernameText = styled.span`
  font-weight: 700;
`;

export const MenuItem = styled.p`
  cursor: pointer;
`;
