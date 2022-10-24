export const fetchFilm = () => {
  return fetch("https://reactjs-cdp.herokuapp.com/movies?limit=1000").then(
    (response) => {
      return response.json();
    }
  );
};
