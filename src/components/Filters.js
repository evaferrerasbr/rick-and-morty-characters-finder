import FilterName from './FilterName';
import FilterGender from './FilterGender';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterName
        handleFilterName={props.handleFilterName}
        inputValue={props.inputValue}
      />
      <FilterGender />
    </form>
  );
}

export default Filters;
