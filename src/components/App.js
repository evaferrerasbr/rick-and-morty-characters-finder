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
  const [serverError, setServerError] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(dataLocal.name);
  const [filterGender, setFilterGender] = useState(dataLocal.gender);
  const [isOrdered, setIsOrdered] = useState(dataLocal.order);

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
      gender: filterGender.toLowerCase(),
      order: isOrdered,
    };
    localStorage.setItem('filters', JSON.stringify(filters));
  };

  //handlers
  const handleFilters = (data) => {
    if (data.name === 'name') {
      setFilterName(data.value);
    }
    if (data.name === 'gender') {
      setFilterGender(data.value);
    }
    if (data.name === 'order') {
      setIsOrdered(data.checked);
    }
  };

  //filters
  const filterCharacthers = () => {
    const filteredCharacters = characters
      .filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
      })
      .filter((character) => {
        return (
          filterGender === 'all' ||
          character.gender.toLowerCase() === filterGender
        );
      });
    if (isOrdered) {
      filteredCharacters.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    return filteredCharacters;
  };

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
            data={filterCharacthers()}
            handleFilters={handleFilters}
            inputValue={filterName}
            genderValue={filterGender}
            isOrdered={isOrdered}
          />
        </Route>
        <Route path="/character/:id" component={renderDetail} />
      </Switch>
      {renderServerError()}
    </>
  );
}

export default App;
