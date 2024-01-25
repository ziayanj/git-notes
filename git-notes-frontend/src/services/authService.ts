import baseService from "./baseService";

const authenticateGithubLogin = async (code: string) => {
  try {
    const response = await baseService.post('/authenticate', { code });

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};

export {
  authenticateGithubLogin,
};
