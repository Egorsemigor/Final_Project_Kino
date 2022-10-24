export const fetchFilms = () => {
  return fetch("https://reactjs-cdp.herokuapp.com/movies?limit=100").then(
    (response) => {
      return response.json();
    }
  );
};
