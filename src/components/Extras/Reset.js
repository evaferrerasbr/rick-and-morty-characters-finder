function Reset(props) {
  const handleChange = () => {
    props.handleReset();
  };

  return (
    <button className="Filters__reset" onClick={handleChange}>
      Reset
    </button>
  );
}

export default Reset;
