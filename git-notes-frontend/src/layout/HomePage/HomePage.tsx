import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import GistsTable from '../../components/GistsTable/GistsTable';
import GistsGrid from '../../components/GistsGrid/GistsGrid';

import type { AppDispatch } from '../../redux/store';
import { getGists } from "../../redux/slices/gistsSlice";
import { ReactComponent as ListIcon } from '../../assets/icons/listIcon.svg';
import { ReactComponent as GridIcon } from '../../assets/icons/gridIcon.svg';

import { HeaderContainer, HomePageContainer, HomePageHeader, ViewButtonsContainer, ViewButton } from './HomePage.styles';


const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const [listView, setListView] = useState(true);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  return (
    <HomePageContainer>
      <HeaderContainer>
        <HomePageHeader>Public Gists</HomePageHeader>
        <ViewButtonsContainer>
          <ViewButton selected={!listView} onClick={() => setListView(false)}>
            <GridIcon />
          </ViewButton>
          <ViewButton selected={listView} onClick={() => setListView(true)}>
            <ListIcon />
          </ViewButton>
        </ViewButtonsContainer>
      </HeaderContainer>
      {listView ? <GistsTable /> : <GistsGrid />}
    </HomePageContainer>
  );
};

export default HomePage;
