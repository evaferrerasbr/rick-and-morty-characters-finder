function Reset(props) {
  const handleChange = () => {
    props.handleReset();
  };

  return <button onClick={handleChange}>Reset</button>;
}

export default Reset;
