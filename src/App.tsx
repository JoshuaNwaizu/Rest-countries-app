import { useEffect, useState } from 'react';
import Home from './body/Home';
import NavBar from './NavBar';
import CountryInfo from './country_info/CountryInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const countriesList: string[] = ['brazil', 'ghana', 'usa', 'germany'];
type Country = {
  flag: object;
  name: object;
  population: string;
  region: string;
  capital: string;
};

const URL: string = 'https://restcountries.com/v3.1/all';

function App() {
  const [isCountries, setIsCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [searchedInput, setSearchedInput] = useState<string>('');

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data[0]);
        setIsCountries(data);

        const getRegions = [...new Set(data.map((country) => country.region))];
        getRegions.unshift('ALL');
        setRegions(getRegions);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();
  }, []);

  const handleSearchChange = (e: string) => {
    setSearchedInput(e.target.value.toLowerCase()); // Convert search text to lowercase for case-insensitive filtering
  };

  // const applyFilters = () => {
  //   let filteredData = isCountries;

  //   // Filter by region (if not "All")
  //   if (selectedRegion !== 'All') {
  //     filteredData = filteredData.filter(
  //       (country) => country.region === selectedRegion
  //     );
  //   }

  //   // Filter by search text (case-insensitive)
  //   if (searchText) {
  //     filteredData = filteredData.filter((country) =>
  //       country.name.toLowerCase().includes(searchText)
  //     );
  //   }

  //   setFilteredCountries(filteredData);
  // };

  return (
    <>
      <header className="mx-5">
        <NavBar />
      </header>
      <main className="mx-4 mt-[6.5rem]">
        <BrowserRouter>
          <Routes>
            <Route
              path="home"
              element={<Home isCountries={isCountries} />}
            />
            <Route
              path="country-info"
              element={<CountryInfo />}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
