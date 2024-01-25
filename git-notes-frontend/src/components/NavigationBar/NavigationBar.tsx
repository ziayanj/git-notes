import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import UserImage from '../UserImage/UserImage';
import UserMenu from '../UserMenu/UserMenu';

import { loginUser } from '../../redux/slices/authSlice';
import { queryGists } from '../../redux/slices/gistsSlice';
import type { RootState, AppDispatch } from '../../redux/store';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';

import {
  NavigationBarContainer,
  NavigationActions,
  NavigationBarSearch,
  UserImageContainer,
  UserMenuContainer,
} from './NavigationBar.styles';

const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user,gist`;

const NavigationBar = () => {
  const dispatch: AppDispatch = useDispatch();

  const loggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userData = useSelector((state: RootState) => state.auth.user);

  const handleGithubRedirect = () => {
    const githubCode = new URLSearchParams(window.location.search).get('code');

    if (githubCode) {
      dispatch(loginUser(githubCode));
    }
  };

  useEffect(() => {
    handleGithubRedirect();
  }, []);

  return (
    <NavigationBarContainer>
      <NavLink to='/'><Logo /></NavLink>
      
      <NavigationActions>
        <NavigationBarSearch
          type="text"
          placeholder='Search gists...'
          prefix={<SearchIcon />}
          onChange={(e) => dispatch(queryGists(e.target.value))}
        />
        {loggedIn && userData ? (
          <UserImageContainer>
            <UserImage src={userData.avatar_url} />
            <UserMenuContainer>
              <UserMenu />
            </UserMenuContainer>
          </UserImageContainer>
        ) : (
          <CustomButton>
            <a href={githubOAuthURL}>
              Login
            </a>
          </CustomButton>
        )}
      </NavigationActions>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
