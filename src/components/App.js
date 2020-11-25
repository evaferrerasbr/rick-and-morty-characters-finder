import { getDataFromApi } from '../services/api';
import { setLocalStorage, getFromLocalStorage } from '../services/localstorage';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loading from './Extras/Loading';
import ServerError from './Extras/ServerError';
import PageNotFound from './Extras/PageNotFound';
import MissingCharacter from './Extras/MissingCharacter';
import Footer from './Footer';

function App() {
  //get the info from the service local-storage and saves an object with all the info in a const to use it in the state
  const dataLocal = getFromLocalStorage();

  //state
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(dataLocal.name);
  const [filterGender, setFilterGender] = useState(dataLocal.gender);
  const [filterStatus, setFilterStatus] = useState(dataLocal.status);
  const [isSortedByName, setIsSortedByName] = useState(dataLocal.order);

  //API
  //this function check the server response and shows a component named ServerError if there has been an error. If it's not, it saves the info in the state
  useEffect(() => {
    getDataFromApi().then((data) => {
      if (data) {
        setCharacters(data);
        setIsLoading(false);
      } else {
        setServerError(true);
      }
    });
  }, []);

  //LOCAL STORAGE
  //we send the info of the filters to the function that is placed in the services folder
  useEffect(() => {
    setLocalStorage(filterName, filterGender, filterStatus, isSortedByName);
  });

  //HANDLERS
  //all filters send info to this function, which save the info in the correct state
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

  //reset the users search
  const handleReset = () => {
    setFilterName('');
    setFilterGender('all');
    setFilterStatus('all');
    setIsSortedByName(false);
  };

  //FILTERS
  //creates an array with the elements that matches the user search and sort elements by name if the user has selected that option
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

  //RENDER
  //render the details of the character with an id that matches the id of the selected route
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

  //when there is any error in the server
  const renderServerError = () => {
    return serverError === true ? <ServerError /> : null;
  };

  //while fetch
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
        <Route path="/" component={PageNotFound} />
      </Switch>
      {renderServerError()}
      {renderLoading()}
      <Footer />
    </>
  );
}

export default App;
