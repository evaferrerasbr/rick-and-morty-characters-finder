import { getDataFromApi } from '../services/api';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import MissingCharacter from './MissingCharacter';
import '../stylesheets/App.scss';

function App() {
  //state
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  //api
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //handlers
  const handleFilterName = (value) => {
    setFilterName(value);
  };

  //filters
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  //render
  const renderDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter) {
      const { image, name, species, status, origin, episode } = foundCharacter;
      return (
        <CharacterDetail
          image={image}
          name={name}
          species={species}
          status={status}
          origin={origin.name}
          episodes={episode.length}
        />
      );
    } else {
      return <MissingCharacter />;
    }
  };

  //jsx
  return (
    <Switch>
      <Route exact path="/">
        <CharacterList
          data={filteredCharacters}
          handleFilterName={handleFilterName}
          inputValue={filterName}
        />
      </Route>
      <Route path="/character/:id" component={renderDetail} />
    </Switch>
  );
}

export default App;
