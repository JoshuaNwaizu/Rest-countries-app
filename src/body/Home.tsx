// import React from 'react'

import SearchBar from './SearchBar';

import CountryData from '../countries_data/CountryData';
type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
};

interface HomeProps {
  isCountries: Country[];
  searchedInput: string;
  filtered: Country[];
  onHandleSearch: (searchInput: string) => void;
  optionTitle: string;
  setOptionTitle: (title: string) => void;
  applyingFilters: () => void;
}

const Home: React.FC<HomeProps> = ({
  searchedInput,
  filtered,
  onHandleSearch,
  optionTitle,
  setOptionTitle,
  applyingFilters,
}) => {
  return (
    <>
      <SearchBar
        searchedInput={searchedInput}
        onHandleSearch={onHandleSearch}
        optionTitle={optionTitle}
        setOptionTitle={setOptionTitle}
        applyingFilters={applyingFilters}
      />

      <CountryData filtered={filtered} />
    </>
  );
};

export default Home;
