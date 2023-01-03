export const searchFilms = (search: string) => {
  return fetch(
    //   `https://reactjs-cdp.herokuapp.com/movies?limit=50&offset=${offset}&search=${search}&searchBy=title`
    // ).then((response) => {
    //   return response.json();
    // });
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
