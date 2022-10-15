import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Context from './context';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import { getData } from './services/getData';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;

  @media (max-width: 1300px) {
    max-width: 80%;
  }
`;

const App = () => {
  const [appData, setAppData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [isModalShow, setIsModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const renderCards = () => {
    setIsLoadingData(true);
    getData().then((items) => {
      setAppData(items);
      setFilteredData(items);
    });
    setIsLoadingData(false);
  };

  const filterData = (searchFieldValue) => {
    const filteredAppData = appData.filter((item) => {
      return item.name.toLowerCase().includes(searchFieldValue.toLowerCase());
    });

    setFilteredData(filteredAppData);
  };

  useEffect(() => {
    renderCards();
  }, []);

  const showModal = (isShow, title) => {
    setIsModalShow(isShow);

    setCurrentUser(appData.find((item) => item.name === title));
  };

  return (
    <Context.Provider value={{ showModal }}>
      <AppContainer>
        <SearchBar filterData={filterData} />

        {isLoadingData && <div>A moment please...</div>}
        {!isLoadingData && <CardList data={filteredData} />}
        {isModalShow && <Modal setIsModalShow={setIsModalShow} currentUser={currentUser} />}
      </AppContainer>
    </Context.Provider>
  );
};

export default App;
