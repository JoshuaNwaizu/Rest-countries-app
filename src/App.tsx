import { useEffect, useState } from 'react';
import Home from './body/Home';
import NavBar from './NavBar';
import CountryInfo from './country_info/CountryInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
};

const URL: string = 'https://restcountries.com/v3.1/all';

function App() {
  const [isCountries, setIsCountries] = useState<Country[]>([]);
  // const [regions, setRegions] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [searchedInput, setSearchedInput] = useState<string>('');
  // const [selectedRegion, setSelectedRegion] = useState<string>('All');

  // const applyingFilters = (): void => {
  //   let filteredData = isCountries;

  //   if (selectedRegion !== 'All') {
  //     filteredData.filter((country) => country.region === selectedRegion);
  //   }

  //   if (searchedInput) {
  //     filteredData = filteredData.filter((country) =>
  //       country.name.toString().toLowerCase().includes(searchedInput)
  //     );
  //     console.log(filteredData);
  //   }

  //   setIsCountries(filteredData);
  //   setFiltered(filteredData);
  // };

  const handleSearchInput = (e: any): void => {
    const value: string = e.target.value;
    setSearchedInput(value);
    console.log(value);
  };

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const res = await fetch(URL);
        const data: Country[] = await res.json();
        console.log(data[0]);
        setIsCountries(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();
    // applyingFilters();
  }, [filtered]);

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
                <Home
                  isCountries={isCountries}
                  searchedInput={searchedInput}
                  onHandleSearch={handleSearchInput}
                />
              }
            />

            <Route
              path="/countries/:name"
              element={<CountryInfo />}
            />
          </Routes>
        </BrowserRouter>
      </main>

      {/* {filtered.map((item, index) => (
        <div key={index}>{item.capital}</div>
      ))} */}
    </>
  );
}

export default App;
