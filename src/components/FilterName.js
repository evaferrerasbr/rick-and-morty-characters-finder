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
        value={props.inputValue}
      />
    </>
  );
}

export default FilterName;
