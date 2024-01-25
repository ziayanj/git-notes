import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';

import UserImage from '../UserImage/UserImage';
import { ReactComponent as StarIcon } from '../../assets/icons/starIcon.svg';
import { ReactComponent as FilledStarIcon } from '../../assets/icons/starIconFilled.svg';
import { ReactComponent as ForkIcon } from '../../assets/icons/forkIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import { deleteGist, forkGist, starGist, unstarGist, isGistStarred } from "../../services/github/gistsService";
import Notification from '../Notification/Notification';
import type { RootState } from '../../redux/store';
import type { GistDetailsType } from "../../types/gistDetails.type";

import { getTimeAgo } from '../../utils/helpers';

import {
  OwnerHeaderContainer,
  OwnerInfoContainer,
  OwnerInfo,
  OwnerContent,
  LighterText,
  GistActionsContainer,
  GistAction,
  GistActionImage,
  GistActionContent,
  GistActionText,
  GistTitle,
} from './OwnerHeader.styles';

type OwnerHeaderProps = {
  gistDetails: GistDetailsType;
  showActions?: boolean;
}

const OwnerHeader = ({ gistDetails, showActions = false }: OwnerHeaderProps) => {
  const navigate = useNavigate();
  const [isStarred, setIsStarred] = useState(false);
  const [forksCount, setForksCount] = useState<number>(gistDetails.forks.length);

  const userData = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (showActions) {
      isGistStarred(gistDetails.id)
        .then(resp => setIsStarred(resp))
        .catch(_ => setIsStarred(false))
    }
  }, [showActions]);

  const handleGistStar = () => {
    const handleStar = isStarred ? unstarGist : starGist;

    handleStar(gistDetails.id)
      .then(resp => setIsStarred(prev => !prev))
      .catch(err => console.error(err))
  };

  const handleGistFork = () => {
    if (userData?.login === gistDetails.owner.login) {
      Notification.toast('You cannot fork your own gist.');

      return;
    }

    forkGist(gistDetails.id)
      .then(resp => {
        Notification.toast('Forked successfully');
        setForksCount(prev => prev + 1)
      })
      .catch(err => console.error(err))
  };

  const handleGistDelete = () => {
    deleteGist(gistDetails.id)
      .then(resp => navigate('/my-profile'))
      .catch(err => console.error(err))
  };

  const handleGistEdit = () => {
    navigate(`/gists/edit/${gistDetails.id}`);
  };

  return (
    <OwnerHeaderContainer>
      <OwnerInfoContainer>
        <UserImage src={gistDetails.owner.avatar_url} />
        <OwnerInfo>
          <OwnerContent>
            {gistDetails.owner.name || gistDetails.owner.login}
            <GistTitle> / {Object.values(gistDetails.files)[0].filename}</GistTitle>
          </OwnerContent>
          <LighterText>Created {getTimeAgo(gistDetails.created_at)}</LighterText>
          <LighterText>{gistDetails.description}</LighterText>
        </OwnerInfo>
      </OwnerInfoContainer>
      {showActions && (
        <GistActionsContainer>
          {userData?.login === gistDetails.owner.login && (
            <>
              <GistAction onClick={handleGistEdit}>
                <GistActionImage><EditOutlined /><GistActionText>Edit</GistActionText></GistActionImage>
              </GistAction>
              <GistAction onClick={handleGistDelete}>
                <GistActionImage><DeleteIcon /><GistActionText>Delete</GistActionText></GistActionImage>
              </GistAction>
            </>
          )}
          <GistAction onClick={handleGistFork}>
            <GistActionImage><ForkIcon /><GistActionText>Fork</GistActionText></GistActionImage>
            <GistActionContent>{forksCount}</GistActionContent>
          </GistAction>
          <GistAction onClick={handleGistStar}>
            <GistActionImage>
              {isStarred ? <FilledStarIcon /> : <StarIcon />}
              <GistActionText>{isStarred ? 'Unstar' : 'Star'}</GistActionText>
            </GistActionImage>
            <GistActionContent>20</GistActionContent>
          </GistAction>
        </GistActionsContainer>
      )}
    </OwnerHeaderContainer>
  );
};

export default OwnerHeader;
