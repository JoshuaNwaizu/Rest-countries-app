import { useEffect, useState } from 'react';
import Home from './body/Home';
import NavBar from './NavBar';
import CountryInfo from './country_info/CountryInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './country_info/ErrorPage';
import Loading from './Loading';
// import BorderInfo from './country_info/BorderInfo';

type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
};

type Inputs = string;
type Loading = boolean;

const URL: string = 'https://restcountries.com/v3.1/all';

function App() {
  const [isCountries, setIsCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [searchedInput, setSearchedInput] = useState<Inputs>('');
  const [optionTitle, setOptionTitle] = useState<Inputs>('');
  const [isLoading, setIsLoading] = useState<Loading>(false);

  const applyingFilters = (): void => {
    let filteredData = isCountries;

    if (optionTitle) {
      filteredData = filteredData.filter(
        (country) => country.region === optionTitle
      );
      setFiltered(filteredData);
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

  

  const handleSearchInput = (e: any): void => {
    const value: string = e.target.value;
    setSearchedInput(value);
    applyingFilters();

    console.log(value);
  };

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        const data: Country[] = await res.json();
        console.log(data[0]);
        setIsCountries(data);
        setFiltered(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    applyingFilters();
    fetchCountries();
  }, []);

  return (
    <>
      <header className="mx-5">
        <NavBar />
      </header>
      <main className="mx-5 mt-[6.5rem]">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? (
                  <Loading />
                ) : (
                  <Home
                    isCountries={isCountries}
                    filtered={filtered}
                    searchedInput={searchedInput}
                    onHandleSearch={handleSearchInput}
                    optionTitle={optionTitle}
                    setOptionTitle={setOptionTitle}
                    applyingFilters={applyingFilters}
                  />
                )
              }
            />

            <Route
              path="/countries/:name"
              element={
                <CountryInfo
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
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
    </>
  );
}

export default App;
