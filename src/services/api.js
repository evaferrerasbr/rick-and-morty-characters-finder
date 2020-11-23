const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getDataFromApi };
