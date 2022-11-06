export const fetchTrailer = (id: string) => {
  return fetch(`https://imdb-api.com/API/Trailer/k_v0ywgho6/${id}`).then(
    (response) => {
      return response.json();
    }
  );
};
