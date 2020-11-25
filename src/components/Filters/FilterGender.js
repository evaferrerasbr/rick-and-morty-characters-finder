import PropTypes from 'prop-types';

function FilterGender(props) {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilters(data);
  };

  return (
    <>
      <label htmlFor="gender">Gender</label>
      <select
        className="Filters__input"
        name="gender"
        id="gender"
        onChange={handleChange}
        value={props.filterGender}
      >
        <option name="gender" value="all">
          All
        </option>
        <option name="gender" value="female">
          Female
        </option>
        <option name="gender" value="male">
          Male
        </option>
        <option name="gender" value="unknown">
          Unknown
        </option>
      </select>
    </>
  );
}

FilterGender.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filterGender: PropTypes.string.isRequired,
};

export default FilterGender;
