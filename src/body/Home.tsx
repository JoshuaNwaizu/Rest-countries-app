// import React from 'react'

import SearchBar from './SearchBar';

import CountryData from '../countries_data/CountryData';

const Home = ({ isCountries, searchedInput, onHandleSearch }) => {
  return (
    <>
      <SearchBar
        searchedInput={searchedInput}
        onHandleSearch={onHandleSearch}
      />

      <CountryData isCountries={isCountries} />
    </>
  );
};

export default Home;
