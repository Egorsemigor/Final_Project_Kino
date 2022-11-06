export const searchFilms = (search: string) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=title&limit=50`
  ).then((response) => {
    return response.json();
  });
};
