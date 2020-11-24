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
      <label htmlFor="gender">Gender:</label>
      <select
        className="Filters__input Filters__input--gender"
        name="gender"
        id="gender"
        onChange={handleChange}
        value={props.filterGender}
      >
        <option className="Filters__options" name="gender" value="all">
          All
        </option>
        <option className="Filters__options" name="gender" value="female">
          Female
        </option>
        <option className="Filters__options" name="gender" value="male">
          Male
        </option>
        <option className="Filters__options" name="gender" value="unknown">
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
