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
          filterName={props.filterName}
          filterGender={props.filterGender}
          filterStatus={props.filterStatus}
          isOrderedByName={props.isOrderedByName}
          handleReset={props.handleReset}
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

export default CharacterList;
