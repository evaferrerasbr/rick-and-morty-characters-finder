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
        name="gender"
        id="gender"
        onChange={handleChange}
        value={props.genderValue}
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

export default FilterGender;
