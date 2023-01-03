export const fetchTrailer = (id: number) => {
  return fetch( `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,
  {
    method: "GET",
    headers: {
      "X-API-KEY": "a533b478-e88b-4441-ba4a-6bf5e23e9ec3",
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      return response.json();
    }
  );
};
