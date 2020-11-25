import PropTypes from 'prop-types';

function FilterStatus(props) {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilters(data);
  };

  return (
    <>
      <label htmlFor="gender">Status</label>
      <select
        className="Filters__input"
        name="status"
        id="status"
        onChange={handleChange}
        value={props.filterStatus}
      >
        <option name="status" value="all">
          All
        </option>
        <option name="status" value="alive">
          Alive
        </option>
        <option name="status" value="dead">
          Dead
        </option>
        <option name="status" value="unknown">
          Unknown
        </option>
      </select>
    </>
  );
}

FilterStatus.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
};

export default FilterStatus;
