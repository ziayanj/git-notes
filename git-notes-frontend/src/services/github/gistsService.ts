import githubBase from "./githubBase";
import { GistApiType } from '../../types/gistApiType';

export const getPublicGists = async () => {
  try {
    const response = await githubBase.get('/gists/public');

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const getUserGists = async (username: string) => {
  try {
    const response = await githubBase.get(`/users/${username}/gists`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const getGist = async (id: string) => {
  try {
    const response = await githubBase.get(`/gists/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const isGistStarred = async (id: string) => {
  try {
    const response = await githubBase.get(`/gists/${id}/star`);

    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  } catch(e) {
    return false;
  }
};

export const starGist = async (id: string) => {
  try {
    const response = await githubBase.put(`/gists/${id}/star`);

    if (response.status === 204) {
      return true;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const unstarGist = async (id: string) => {
  try {
    const response = await githubBase.delete(`/gists/${id}/star`);

    if (response.status === 204 ) {
      return true;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const forkGist = async (id: string) => {
  try {
    const response = await githubBase.post(`/gists/${id}/forks`);

    if (response.status === 201) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const deleteGist = async (id: string) => {
  try {
    const response = await githubBase.delete(`/gists/${id}`);

    if (response.status === 204 ) {
      return true;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const createGist = async (data: GistApiType) => {
  try {
    const response = await githubBase.post('/gists', data);

    if (response.status === 201 ) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export const updateGist = async (data: GistApiType, id: string) => {
  try {
    const response = await githubBase.patch(`/gists/${id}`, data);

    if (response.status === 200 ) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};
