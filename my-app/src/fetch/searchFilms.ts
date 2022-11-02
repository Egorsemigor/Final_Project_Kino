export const searchFilms = (search: string) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=title&limit=100`
  ).then((response) => {
    return response.json();
  });
};
