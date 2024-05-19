import SearchBar from './SearchBar';

import CountryData from '../CountriesData/CountryData';
type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
  cca3: string;
};

interface HomeProps {
  isCountries: Country[];
  searchedInput: string;
  filtered: Country[];
  onHandleSearch: (searchInput: string) => void;
  optionTitle: string | undefined;
  setOptionTitle: (title: string) => void;
  applyingFilters: () => void;
  darkTheme: boolean;
  handleDarkMode: () => void;
}

const Home: React.FC<HomeProps> = ({
  searchedInput,
  filtered,
  onHandleSearch,
  optionTitle,
  setOptionTitle,
  applyingFilters,
  darkTheme,
  handleDarkMode,
}) => {
  return (
    <section className="-mt-7">
      <SearchBar
        searchedInput={searchedInput}
        onHandleSearch={onHandleSearch}
        optionTitle={optionTitle}
        setOptionTitle={setOptionTitle}
        applyingFilters={applyingFilters}
        darkTheme={darkTheme}
        handleDarkMode={handleDarkMode}
      />

      <CountryData
        filtered={filtered}
        darkTheme={darkTheme}
      />
    </section>
  );
};

export default Home;
