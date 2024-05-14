// import React from 'react'
import { Link } from 'react-router-dom';

const CountryData = ({ isCountries, filtered }) => {
  return (
    <section className="flex flex-col gap-12 my-[2.5rem]">
      {filtered.map((item) => (
        <div
          key={item.name.official}
          className="flex flex-col items-center justify-center "
        >
          <Link to={`/countries/${item.name.official}`}>
            <div className="flex flex-col gap-7 justify-center bg-[#fff] shadow-md w-[312px] rounded-md">
              <div className="">
                <img
                  src={item.flags.png}
                  alt={item.name.common}
                  className="rounded-md"
                />
              </div>
              <article className="flex flex-col gap-5 px-7">
                <h1 className="text-xl font-extrabold leading-6 ">
                  {item.name.official}
                </h1>
                <div className="flex flex-col gap-2 pb-[3rem]">
                  <h2 className=" font-medium text-[14px] ">
                    Population:{' '}
                    <span className="font-light ">{item.population}</span>
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
  );
};

export default CountryData;
