import { getDataFromApi } from '../services/api';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import ServerError from './ServerError';
import MissingCharacter from './MissingCharacter';
import '../stylesheets/App.scss';

function App() {
  const dataLocal = JSON.parse(localStorage.getItem('filters'));

  //state
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(dataLocal.name);
  const [serverError, setServerError] = useState(false);

  //api
  useEffect(() => {
    getDataFromApi().then((data) => {
      if (data) {
        setCharacters(data);
      } else {
        setServerError(true);
      }
    });
  }, []);

  //local storage
  useEffect(() => {
    setLocalStorage();
  });

  const setLocalStorage = () => {
    const filters = {
      name: filterName,
    };
    localStorage.setItem('filters', JSON.stringify(filters));
  };

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

  const renderServerError = () => {
    return serverError === true ? <ServerError /> : null;
  };

  //jsx
  return (
    <>
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
      {renderServerError()}
    </>
  );
}

export default App;
