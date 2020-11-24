import Filters from './Filters';
import CharacterCard from './CharacterCard';

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
          inputValue={props.inputValue}
          genderValue={props.genderValue}
          isOrdered={props.isOrdered}
        />
        <ul>{getCharacterList}</ul>
      </section>
    </main>
  );
}

export default CharacterList;
