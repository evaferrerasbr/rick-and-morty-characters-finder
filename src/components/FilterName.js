function FilterName(props) {
  const handleChange = (ev) => {
    const value = ev.currentTarget.value;
    props.handleFilterName(value);
  };

  return (
    <>
      <label htmlFor="filterName" />
      <input id="filterName" onChange={handleChange} value={props.inputValue} />
    </>
  );
}

export default FilterName;
