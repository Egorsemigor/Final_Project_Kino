export const fetchTrailer = (id: string) => {
  return fetch(`https://imdb-api.com/API/Trailer/k_7qx1yz6m/${id}`).then(
    (response) => {
      return response.json();
    }
  );
};
