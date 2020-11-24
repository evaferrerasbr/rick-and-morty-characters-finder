import { getDataFromApi } from '../services/api';
import { setLocalStorage, getFromLocalStorage } from '../services/localstorage';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loading from './extras/Loading';
import ServerError from './extras/ServerError';
import MissingCharacter from './extras/MissingCharacter';
import Footer from './Footer';
import '../stylesheets/components/App.scss';

function App() {
  const dataLocal = getFromLocalStorage();

  //state
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(dataLocal.name);
  const [filterGender, setFilterGender] = useState(dataLocal.gender);
  const [filterStatus, setFilterStatus] = useState(dataLocal.status);
  const [isSortedByName, setIsSortedByName] = useState(dataLocal.order);

  //api
  useEffect(() => {
    setIsLoading(true);
    getDataFromApi().then((data) => {
      if (data) {
        setCharacters(data);
        setIsLoading(false);
      } else {
        setServerError(true);
      }
    });
  }, []);

  //local storage
  useEffect(() => {
    setLocalStorage(filterName, filterGender, filterStatus, isSortedByName);
  });

  //handlers
  const handleFilters = (data) => {
    if (data.name === 'name') {
      setFilterName(data.value);
    }
    if (data.name === 'gender') {
      setFilterGender(data.value);
    }
    if (data.name === 'status') {
      setFilterStatus(data.value);
    }
    if (data.name === 'order') {
      setIsSortedByName(data.checked);
    }
  };

  const handleReset = () => {
    setFilterName('');
    setFilterGender('all');
    setFilterStatus('all');
    setIsSortedByName(false);
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
      })
      .filter((character) => {
        return (
          filterStatus === 'all' ||
          character.status.toLowerCase() === filterStatus
        );
      });
    if (isSortedByName) {
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

  const renderLoading = () => {
    return isLoading === true ? <Loading /> : null;
  };

  //jsx
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <CharacterList
            data={filterCharacthers()}
            handleFilters={handleFilters}
            handleReset={handleReset}
            filterName={filterName}
            filterGender={filterGender}
            filterStatus={filterStatus}
            isLoading={isLoading}
            isSortedByName={isSortedByName}
          />
        </Route>
        <Route path="/character/:id" component={renderDetail} />
      </Switch>
      {renderServerError()}
      {renderLoading()}
      <Footer />
    </>
  );
}

export default App;
