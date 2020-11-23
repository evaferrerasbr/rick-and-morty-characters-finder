function FilterGender(props) {
  return (
    <>
      <label htmlFor="gender">Gender:</label>
      <select name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
}

export default FilterGender;
