import { Link } from 'react-router-dom';
import { IoArrowUpOutline } from 'react-icons/io5';

type Country = {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string;
  cca3: string;
};

interface filteredProps {
  filtered: Country[];
  darkTheme: boolean;
  // cca3: Country[];
}
const CountryData: React.FC<filteredProps> = ({ filtered, darkTheme }) => {
  const darkAndLightText = darkTheme ? 'text-[#fff]' : 'text-[#4e5b62]';
  const darkAndLightBackground = darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]';

  return (
    <>
      <section className="flex flex-col gap-12 my-[2.5rem] min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:justify-center ">
        {filtered.map((item) => (
          <Link
            to={`/countries/${item?.cca3}`}
            key={item.flags.png}
            className=" cursor-pointer "
          >
            <article className="flex flex-col items-center justify-center ">
              <div
                className={`flex flex-col gap-7 justify-center  ${darkAndLightBackground} shadow-md w-[312px] h-[410px] rounded-md max-[320px]:w-[280px]`}
              >
                <div className="max-[320px]:flex max-[320px]:items-center max-[320px]:justify-center">
                  <img
                    src={item?.flags.png}
                    alt={item?.name.common}
                    className="rounded-md w-[312px] h-[210px] max-[320px]:w-[280px] max-[320px]:h-[210px]"
                  />
                </div>
                <article
                  className={`flex flex-col gap-5 px-7 ${darkAndLightText}`}
                >
                  <h1 className="text-xl font-extrabold leading-6 ">
                    {item?.name.official}
                  </h1>
                  <div className="flex flex-col gap-2 pb-[3rem]">
                    <h2 className=" font-medium text-[14px] ">
                      Population:{' '}
                      <span className="font-light ">
                        {item?.population.toLocaleString()}
                      </span>
                    </h2>
                    <h2 className=" font-medium text-[14px] ">
                      Region:
                      <span className="font-light "> {item?.region}</span>
                    </h2>
                    <h2 className=" font-medium text-[14px] ">
                      Capital:
                      <span className="font-light "> {item?.capital}</span>
                    </h2>
                  </div>
                </article>
              </div>
            </article>
          </Link>
        ))}

        <section className="hidden">
          <a href="top">
            <span className="fixed right-[1rem] text-gray-600 min-[884px]:right-[3rem] inline-flex bottom-[10%] font-bold text-xl bg-[#FFF] p-3 min-[1024px]:p-5 min-[1024px]:text-[1.5rem] shadow-xl rounded-lg">
              {' '}
              <IoArrowUpOutline />
            </span>
          </a>{' '}
        </section>
      </section>
    </>
  );
};

export default CountryData;
