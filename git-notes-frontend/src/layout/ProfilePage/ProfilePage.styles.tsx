import { styled } from 'styled-components';
import { Button } from 'antd';

export const ProfilePageContainer = styled.div`
  display: flex;
  padding: 2rem 8rem;
  column-gap: 5rem;
`;

export const ProfileInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const ProfileHeader = styled.p`
  font-size: 25px;
  color: #3D3D3D;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const GistsCount = styled.span`
  padding: 2px 8px 2px 7px;
  font-size: 11px;
  font-weight: 700;
  color: #FFF;
  background-color: var(--dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const ProfileButton = styled(Button)`
  font-weight: 600;
  background-color: var(--dark);
  color: #FFF;
  padding: 16px 32px;
  align-items: center;
  display: flex;
`;

export const GistsColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`; 

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
`;
