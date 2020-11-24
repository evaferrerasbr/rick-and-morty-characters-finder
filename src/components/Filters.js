import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterAlphabet from './FilterAlphabet';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterName
        handleFilters={props.handleFilters}
        inputValue={props.inputValue}
      />
      <FilterGender handleFilters={props.handleFilters} />
      <FilterAlphabet
        handleFilters={props.handleFilters}
        isOrdered={props.isOrdered}
      />
    </form>
  );
}

export default Filters;
