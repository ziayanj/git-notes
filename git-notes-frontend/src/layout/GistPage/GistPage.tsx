import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import OwnerHeader from '../../components/OwnerHeader/OwnerHeader';
import GistContent from '../../components/GistContent/GistContent';
import type { RootState, AppDispatch } from '../../redux/store';
import { getGistDetails } from "../../redux/slices/gistsSlice";
import { GistPageContainer, GistFilesContainer } from './GistPage.styles';

const GistPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const userData = useSelector((state: RootState) => state.auth.user);
  const gistDetails = useSelector((state: RootState) => state.gists.gistDetails);

  useEffect(() => {
    if (id) {
      dispatch(getGistDetails(id));
    }
  }, [id, dispatch]);

  if (!gistDetails || gistDetails.id !== id) {
    return <p>Loading...</p>;
  }

  return (
    <GistPageContainer>
      <OwnerHeader gistDetails={gistDetails} showActions={!!userData} />
      <GistFilesContainer>
        {Object.values(gistDetails.files).map(gistFile => (
          <GistContent key={gistFile.raw_url} gist={gistFile} />
        ))}
      </GistFilesContainer>
    </GistPageContainer>
  );
};

export default GistPage;
