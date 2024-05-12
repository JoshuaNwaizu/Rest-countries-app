import { useEffect, useState } from 'react';
import Home from './body/Home';
import CountryData from './countries_data/CountryData';
import NavBar from './NavBar';

const countriesList: string[] = ['brazil', 'ghana', 'usa', 'germany'];

function App() {
  const [isCountries, setIsCountries] = useState<string[]>([]);
  useEffect(() => {
    const countries = async (country: string) => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();
      // console.log(res);
      console.log(data);
      // console.log(isCountries)
      setIsCountries(countriesList);
    };
    countriesList.map((item) => countries(item));
  });
  return (
    <>
      <header className="mx-5">
        <NavBar />
      </header>
      <main className="mx-4 mt-[6.5rem]">
        <Home />
        <CountryData isCountries={isCountries} />
      </main>

      {/* {isCountries.map((item) => (
        <div>{}</div>
      ))} */}
    </>
  );
}

export default App;
