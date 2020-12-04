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
      <label className="Filters__input--orderLabel" htmlFor="order">
        <input
          className="Filters__input--order"
          id="order"
          type="checkbox"
          value="order"
          name="order"
          onChange={handleChange}
          checked={props.isSortedByName ? true : false}
        />
        <span
          className={props.isSortedByName ? 'Filters__input--orderChecked' : ''}
        ></span>
        Order by name
      </label>
    </>
  );
}

FilterAlphabet.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  isSortedByName: PropTypes.bool.isRequired,
};

export default FilterAlphabet;
