const getFromLocalStorage = () => {
  const dataLocal = JSON.parse(localStorage.getItem('filters'));
  return dataLocal !== null
    ? dataLocal
    : {
        name: '',
        gender: 'all',
        status: 'all',
        order: false,
      };
};

const setLocalStorage = (filterName, filterGender, filterStatus, isOrdered) => {
  const filters = {
    name: filterName,
    gender: filterGender.toLowerCase(),
    status: filterStatus.toLowerCase(),
    order: isOrdered,
  };
  localStorage.setItem('filters', JSON.stringify(filters));
};

export { setLocalStorage, getFromLocalStorage };
