import PropTypes from 'prop-types';

function FilterAlphabet(props) {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      checked: ev.currentTarget.checked,
    };
    props.handleFilters(data);
  };

  return (
    <>
      <label htmlFor="order">
        <input
          id="order"
          type="checkbox"
          value="order"
          name="order"
          onChange={handleChange}
          checked={props.isSortedByName ? true : false}
        />
        Order alphabetically
      </label>
    </>
  );
}

FilterAlphabet.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  isSortedByName: PropTypes.bool.isRequired,
};

export default FilterAlphabet;
