import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "../../redux/slices/authSlice";
import type { RootState, AppDispatch } from '../../redux/store';
import { UserMenuContainer, UserMenuSection, SmallText, UsernameText, MenuItem, MenuHeader } from './UserMenu.styles';

const UserMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.user);

  if (!userData) {
    return null;
  }

  const handleSignout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <UserMenuContainer>
      <MenuHeader>
        <SmallText>Signed in as</SmallText>
        <Link to="/my-profile">
          <UsernameText>{userData.name || userData.login}</UsernameText>
        </Link>
      </MenuHeader>
      <UserMenuSection>
        <a href={`https://gist.github.com/${userData.login}`} target="_blank">
          Your gists
        </a>
        <a href={`https://gist.github.com/${userData.login}/starred`} target="_blank">
          Starred gists
        </a>
        <Link to="/gists/new">
          Create Gist
        </Link>
        <a href={userData.html_url} target="_blank">
          Your GitHub profile
        </a>
      </UserMenuSection>
      <UserMenuSection>
        <a href='https://support.github.com/' target="_blank">
          Help
        </a>
        <MenuItem onClick={handleSignout}>Sign out</MenuItem>
      </UserMenuSection>
    </UserMenuContainer>
  );
};

export default UserMenu;
