export const fetchGenres = (genre: string, offset?: number) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres&offset=${offset}&limit=150`
  ).then((response) => {
    return response.json();
  });
};

export const fetchSimilarGenres = (genre: string) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres&limit=6`
  ).then((response) => {
    return response.json();
  });
};
