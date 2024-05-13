// import React from 'react'

import SearchBar from './SearchBar';

import CountryData from '../countries_data/CountryData';

const Home = ({ isCountries }) => {
  return (
    <>
      <SearchBar />
      <CountryData isCountries={isCountries} />
    </>
  );
};

export default Home;
