export const fetchFilms = (offset: number) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?limit=100&offset=${offset}`).then(
    (response) => {
      return response.json();
    }
  );
};
