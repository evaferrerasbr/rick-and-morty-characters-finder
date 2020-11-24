import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterStatus from './FilterStatus';
import FilterAlphabet from './FilterAlphabet';
import Reset from './Reset';

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
      <FilterGender
        handleFilters={props.handleFilters}
        genderValue={props.genderValue}
      />
      <FilterStatus
        handleFilters={props.handleFilters}
        statusValue={props.statusValue}
      />
      <FilterAlphabet
        handleFilters={props.handleFilters}
        isOrdered={props.isOrdered}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
}

export default Filters;
