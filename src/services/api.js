const getDataFromApi = () => {
  return fetch('https://ricandmortyapi.com/api/character')
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(() => {});
};

export { getDataFromApi };
