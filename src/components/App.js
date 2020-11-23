import { getDataFromApi } from '../services/api';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';
import MissingCharacter from './MissingCharacter';

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

  //jsx
  return (
    <main className="App">
      <h1>Rick and Morty characters finder</h1>
      <Filters handleFilterName={handleFilterName} inputValue={filterName} />
      {filteredCharacters.length === 0 ? (
        <MissingCharacter />
      ) : (
        <CharacterList data={filteredCharacters} />
      )}
    </main>
  );
}

export default App;
