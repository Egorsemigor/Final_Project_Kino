export const fetchGenres = (genre: string, offset?: number) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres&offset=${offset}&limit=150`
  ).then((response) => {
    return response.json();
  });
};
