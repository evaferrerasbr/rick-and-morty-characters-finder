import FilterName from './FilterName';

function Filters(props) {
  return (
    <form>
      <FilterName handleFilterName={props.handleFilterName} />
    </form>
  );
}

export default Filters;
