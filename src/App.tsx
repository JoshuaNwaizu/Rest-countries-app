import Home from './Body/Home';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <div className="mx-5">
        <NavBar />
      </div>
      <main className="mx-4 mt-[7rem]">
        <Home />
      </main>
    </>
  );
}

export default App;
