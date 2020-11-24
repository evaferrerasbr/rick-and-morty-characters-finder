const getFromLocalStorage = () => {
  const dataLocal = JSON.parse(localStorage.getItem('filters'));
  return dataLocal !== null ? dataLocal : {};
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

const removeLocalStorage = () => {
  localStorage.removeItem('filters');
};

export { setLocalStorage, getFromLocalStorage, removeLocalStorage };
