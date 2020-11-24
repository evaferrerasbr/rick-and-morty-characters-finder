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
          checked={props.isOrdered ? true : false}
        />
        Order alphabetically
      </label>
    </>
  );
}

export default FilterAlphabet;
