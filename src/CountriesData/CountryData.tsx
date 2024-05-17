import { Link } from 'react-router-dom';

type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
};

interface filteredProps {
  filtered: Country[];
  darkTheme: boolean;
}
const CountryData: React.FC<filteredProps> = ({ filtered, darkTheme }) => {
  const darkAndLightText = darkTheme ? 'text-[#fff]' : 'text-[#4e5b62]';
  const darkAndLightBackground = darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]';

  return (
    <>
      <section className="flex flex-col gap-12 my-[2.5rem]">
        {filtered.map((item) => (
          <div
            key={item.flags.png}
            className="flex flex-col items-center justify-center "
          >
            <Link to={`/countries/${item.name.official}`}>
              <div
                className={`flex flex-col gap-7 justify-center ${darkAndLightBackground} shadow-md w-[312px] rounded-md`}
              >
                <div className="">
                  <img
                    src={item.flags.png}
                    alt={item.name.common}
                    className="rounded-md w-[312px] h-[210px]"
                  />
                </div>
                <article
                  className={`flex flex-col gap-5 px-7 ${darkAndLightText}`}
                >
                  <h1 className="text-xl font-extrabold leading-6 ">
                    {item.name.official}
                  </h1>
                  <div className="flex flex-col gap-2 pb-[3rem]">
                    <h2 className=" font-medium text-[14px] ">
                      Population:{' '}
                      <span className="font-light ">
                        {item.population.toLocaleString()}
                      </span>
                    </h2>
                    <h2 className=" font-medium text-[14px] ">
                      Region:<span className="font-light "> {item.region}</span>
                    </h2>
                    <h2 className=" font-medium text-[14px] ">
                      Capital:
                      <span className="font-light "> {item.capital}</span>
                    </h2>
                  </div>
                </article>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default CountryData;
