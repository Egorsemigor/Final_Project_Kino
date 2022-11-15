export const fetchTrailer = (id: string) => {
  return fetch(`https://imdb-api.com/API/Trailer/k_s2aabvna/${id}`).then(
    (response) => {
      return response.json();
    }
  );
};
