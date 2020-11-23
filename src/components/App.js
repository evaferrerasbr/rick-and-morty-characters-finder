import { getDataFromApi } from '../services/api';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';

function App() {
  //state
  const [characters, setCharacters] = useState([]);

  //api
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //jsx
  return (
    <main className="App">
      <h1>Rick and Mortie character finder</h1>
      <CharacterList data={characters} />
    </main>
  );
}

export default App;
