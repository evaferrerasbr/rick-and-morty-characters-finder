import PropTypes from 'prop-types';

function FilterName(props) {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilters(data);
  };

  return (
    <>
      <label htmlFor="filterName" />
      <input
        id="filterName"
        name="name"
        onChange={handleChange}
        value={props.filterName}
      />
    </>
  );
}

FilterName.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterName;
