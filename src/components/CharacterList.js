import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const getCharacterList = props.data.map((character) => {
    const { id, image, name, status, species } = character;
    return (
      <li key={id}>
        <CharacterCard
          image={image}
          name={name}
          species={species}
          status={status}
        />
      </li>
    );
  });

  return <ul>{getCharacterList}</ul>;
}

export default CharacterList;
