export const fetchFilms = (offset?: number) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?limit=10&offset=${offset}`
  ).then((response) => {
    return response.json();
  });
};
