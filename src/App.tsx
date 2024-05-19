import { useEffect, useState } from 'react';
import Home from './body/Home';
import NavBar from './NavBar';
import CountryInfo from './CountryInfo/CountryInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './CountryInfo/ErrorPage';
import Loading from './Loading';

type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
  cca3: string;
  borders: string[];
};

type Inputs = string;
type Loading = boolean;
type Option = string | undefined;

const URL: string = 'https://restcountries.com/v3.1/all';

function App() {
  const [isCountries, setIsCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [searchedInput, setSearchedInput] = useState<Inputs>('');
  const [optionTitle, setOptionTitle] = useState<Option>('');
  const [isLoading, setIsLoading] = useState<Loading>(false);
  const [darkTheme, setDarkTheme] = useState<Loading>(false);
  const [errMsg, setErrMsg] = useState<Inputs>('');

  const applyingFilters = (): void => {
    let filteredData: Country[] = isCountries;
    if (optionTitle) {
      filteredData = filteredData.filter(
        (country) => country.region === optionTitle
      );
      setFiltered(filteredData);
      console.log(optionTitle);
    }
    if (searchedInput) {
      filteredData = filteredData.filter((country) =>
        country.name.common.toString().toLowerCase().includes(searchedInput)
      );
      console.log(filteredData);
      setFiltered(filteredData);
    }

    setFiltered(filteredData);
  };

  const handleDarkMode = (): void => {
    setDarkTheme(!darkTheme);

    if (darkTheme) {
      document.body.style.backgroundColor = '#FAFAFA';
    } else {
      document.body.style.backgroundColor = '#202C36';
    }
  };

  const handleSearchInput = (e: any): void => {
    const value: string = e.target.value;
    setSearchedInput(value);
    applyingFilters();

    console.log(value);
  };

  const getBorderCountryNames = (borderCodes: string[]): string[] => {
    return borderCodes.map((code: string) => {
      const borderCountry = isCountries.find(
        (country) => country.cca3 === code
      );
      return borderCountry?.name.common || code;
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        if (!res.ok) throw new Error('Could not get this particular country');

        const data: Country[] = await res.json();
        console.log(data[0]);

        setIsCountries(data);
        setFiltered(data);
        setIsLoading(false);
      } catch (err: any) {
        console.log(err.message);
        setErrMsg(err.message);
      }
    };

    applyingFilters();
    fetchCountries();
  }, []);

  return (
    <div
      className={` ${
        darkTheme ? 'bg-[#202C36]' : 'bg-[#FAFAFA]'
      } transition-colors duration-300`}
    >
      <header className="mx-5 bg-[#FAFAFA]">
        <NavBar
          darkTheme={darkTheme}
          handleDarkMode={handleDarkMode}
        />
      </header>
      <main className="mx-5 mt-[6.5rem]">
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                isLoading ? (
                  <Loading darkTheme={darkTheme} />
                ) : !isLoading && !errMsg ? (
                  <Home
                    isCountries={isCountries}
                    filtered={filtered}
                    searchedInput={searchedInput}
                    onHandleSearch={handleSearchInput}
                    optionTitle={optionTitle}
                    setOptionTitle={setOptionTitle}
                    applyingFilters={applyingFilters}
                    darkTheme={darkTheme}
                    handleDarkMode={handleDarkMode}
                  />
                ) : (
                  errMsg && <ErrorPage />
                )
              }
            />

            <Route
              path="/countries/:name"
              element={
                <CountryInfo
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  darkTheme={darkTheme}
                  getBorderCountryNames={getBorderCountryNames}
                />
              }
            />

            <Route
              path="*"
              element={<ErrorPage />}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
