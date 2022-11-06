
export const fetchFilms = (offset: number, search: string) => {
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?limit=50&offset=${offset}&search=${search}&searchBy=title`

  ).then((response) => {
    return response.json();
  });
};
