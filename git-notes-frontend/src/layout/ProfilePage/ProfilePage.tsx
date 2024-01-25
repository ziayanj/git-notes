import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'antd';

import type { RootState, AppDispatch } from '../../redux/store';
import { fetchUserGists } from "../../redux/slices/gistsSlice";
import GistCard from "../../components/GistCard/GistCard";

import {
  ProfilePageContainer,
  ProfileInfoColumn,
  ProfilePicture,
  ProfileHeader,
  ProfileButton,
  GistsColumn,
  GistsCount,
  PaginationContainer,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user);
  const userGists = useSelector((state: RootState) => state.gists.userGists);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (userData) {
      dispatch(fetchUserGists(userData.login));
    }
  }, [userData, dispatch]);

  if (!userData) {
    return <p>Please login to see your profile information!</p>
  }

  return (
    <ProfilePageContainer>
      <ProfileInfoColumn>
        <ProfilePicture src={userData.avatar_url} />
        <ProfileHeader>{userData.name}</ProfileHeader>
        <ProfileButton>
          <a href={userData.html_url} target="_blank">
            View GitHub Profile
          </a>
        </ProfileButton>
      </ProfileInfoColumn>
      <GistsColumn>
        <ProfileHeader>
          All Gists
          <GistsCount>{userGists.length}</GistsCount>
        </ProfileHeader>
        {userGists.slice((page - 1) * 2, (page - 1) * 2 + 2).map(gist => <GistCard key={gist.id} gist={gist} />)}

        <PaginationContainer>
          <Pagination
            current={page}
            total={userGists.length}
            onChange={setPage}
            defaultPageSize={2}
            hideOnSinglePage
          />
        </PaginationContainer>
      </GistsColumn>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
