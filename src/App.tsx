import Home from './body/Home';
import CountryData from './countries_data/CountryData';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <header className="mx-5">
        <NavBar />
      </header>
      <main className="mx-4 mt-[6.5rem]">
        <Home />
        <CountryData />
      </main>
    </>
  );
}

export default App;
