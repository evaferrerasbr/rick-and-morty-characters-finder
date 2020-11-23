function FilterName(props) {
  const handleChange = (ev) => {
    const value = ev.currentTarget.value;
    props.handleFilterName(value);
  };

  return <input onChange={handleChange} />;
}

export default FilterName;
