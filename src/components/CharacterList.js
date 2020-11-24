import PropTypes from 'prop-types';
import Filters from './Filters/Filters';
import CharacterCard from './CharacterCard';
import NotFound from './Extras/NotFound';

function CharacterList(props) {
  const getCharacterList = props.data.map((character) => {
    const { id, image, name, status, species } = character;
    return (
      <li key={id}>
        <CharacterCard
          id={id}
          image={image}
          name={name}
          species={species}
          status={status}
        />
      </li>
    );
  });

  return (
    <main>
      <h1>Rick and Morty characters finder</h1>
      <section>
        <Filters
          handleFilters={props.handleFilters}
          handleReset={props.handleReset}
          filterName={props.filterName}
          filterGender={props.filterGender}
          filterStatus={props.filterStatus}
          isOrderedByName={props.isOrderedByName}
        />
        <ul>
          {!getCharacterList.length && !props.isLoading ? (
            <NotFound />
          ) : (
            getCharacterList
          )}
        </ul>
      </section>
    </main>
  );
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterGender: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOrderedByName: PropTypes.bool.isRequired,
};

export default CharacterList;
