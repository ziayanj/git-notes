import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { getGist, getPublicGists, getUserGists } from '../../services/github/gistsService';
import type { GistType } from '../../types/gist.type';
import type { GistDetailsType } from '../../types/gistDetails.type';

export const getGists = () => async (dispatch: Dispatch) => {
  try {
    const response = await getPublicGists();

    dispatch(gistsLoaded(response));
  } catch(e) {
    console.error(e);
  }
};

export const getGistDetails = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await getGist(id);

    if (response) {
      dispatch(gistDetailsLoaded(response));
    } else {
      console.error('Error while loading gist details');
    }
  } catch(e) {
    console.error(e);
  }
};

export const fetchUserGists = (username: string) => async (dispatch: Dispatch) => {
  try {
    const response = await getUserGists(username);

    if (response) {
      dispatch(userGistsLoaded(response));
    } else {
      console.error('Error while loading user gists');
    }
  } catch(e) {
    console.error(e);
  }
};

type GistsState = {
  gists: GistType[];
  gistDetails: GistDetailsType | null;
  userGists: GistType[];
  queriedGists: GistType[];
}

const initialState: GistsState = {
  gists: [],
  gistDetails: null,
  userGists: [],
  queriedGists: [],
};

export const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    gistsLoaded: (state, action) => {
      state.gists = action.payload;
      state.queriedGists = action.payload;
    },
    gistDetailsLoaded: (state, action) => {
      state.gistDetails = action.payload;
    },
    userGistsLoaded: (state, action) => {
      state.userGists = action.payload;
    },
    queryGists: (state, action) => {
      state.queriedGists = state.gists.filter(({ id }) => id.match(new RegExp(action.payload, 'i')));
    }
  },
});

export const { gistsLoaded, gistDetailsLoaded, userGistsLoaded, queryGists } = gistsSlice.actions;

export default gistsSlice.reducer;
