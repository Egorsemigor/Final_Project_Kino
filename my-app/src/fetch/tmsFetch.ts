import { refreshToken } from './refreshToken';

export const tmsFetch = async (url: string, config?: RequestInit) => {
  const access = localStorage.getItem("access");

  const newConfig = {
    ...config,
    headers: access
      ? {
          ...config?.headers,
          Authorization: `Bearer ${access}`,
        }
      : config?.headers,
  };

  /**
   * config --- {method: 'GET', headers: {'Content-type': 'json'}, body: '...'}
   * newConfig --- {method: 'GET', headers: {'Content-type': 'json', Authorization: `Bearer ${access}`,}, body: '...'}
   */

  const response = await fetch(url, newConfig);

  if (response.ok === false && response.status === 401) {
    const error = await response.json();
    const isExpired = error.code === "token_not_valid";

    if (isExpired) {
      const responseToken = await refreshToken();

      if (responseToken.ok) {
        const { access } = await responseToken.json();

        localStorage.setItem("access", access);
        //перезапрос
        const refreshedResponse = await fetch(url, {
          ...config,
          headers: {
            Authorization: `Bearer ${access}`,
            ...config?.headers,
          },
        });

        return refreshedResponse;
      }
    }
  }

  return response;
};
