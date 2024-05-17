// import React from 'react'

import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Loading from '../Loading';

// interface Languages {
//   name: string;
// }

type CountryInfo = {
  cca3: string;
  flags: { png: string; svg: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: { code: number; name: string; symbol: string }[];
  borders: string[];
  languages: { [code: string]: string };
};
type Loading = boolean;

interface IsLoading {
  isLoading: Loading;
  setIsLoading: (title: Loading) => void;
  darkTheme: boolean;
  getBorderCountryNames: (borderCodes: string[]) => string[];
}

const CountryInfo: React.FC<IsLoading> = ({
  isLoading,
  setIsLoading,
  darkTheme,
  getBorderCountryNames,
}) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo[]>([]);
  const { name } = useParams();
  const darkAndLightText = darkTheme ? 'text-[#fff]' : 'text-[#111517]';
  const darkAndLightBackground = darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]';

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data: CountryInfo[] = await res.json();
        setCountryInfo(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();
  }, [name, setIsLoading]);

  return (
    <section className="py-[2rem] mx-4 -mt-6">
      <Link to="/">
        <button
          className={` ${darkAndLightBackground}  ${darkAndLightText} flex py-2 px-6 items-center gap-2 rounded-md shadow-md `}
        >
          <BsArrowLeft /> <span>Back</span>{' '}
        </button>
      </Link>
      {isLoading ? (
        <Loading darkTheme={darkTheme} />
      ) : (
        <div className="flex flex-col items-center justify-center mx-4 mt-[4rem] ">
          <div className="w-[335px]">
            {countryInfo.map((country) => (
              <>
                <div key={country.cca3}>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-[355px] rounded-md h-[255px]"
                  />
                </div>

                <article
                  className={`mt-[2rem] flex flex-col justify-center gap-[2rem]`}
                >
                  <div className="flex flex-col gap-[1rem]">
                    <div>
                      <h1
                        className={`font-extrabold text-xl ${darkAndLightText} `}
                      >
                        {country.name.common}
                      </h1>
                    </div>

                    <ul className={`flex flex-col gap-2 ${darkAndLightText}`}>
                      <li>
                        <strong>Native Name: </strong>
                        {Object.values(country.name.nativeName)[0].official ||
                          'Native Name Unavailable'}
                      </li>
                      <li>
                        <strong>Population: </strong>
                        {country.population.toLocaleString()}
                      </li>
                      <li>
                        <strong>Region: </strong>
                        {country.region}
                      </li>
                      {country.subregion && (
                        <li>
                          <strong>Sub Region:</strong> {country.subregion}
                        </li>
                      )}

                      <li>
                        <strong>Capital: </strong>
                        {country.capital}
                      </li>
                    </ul>
                  </div>

                  <ul className={`flex flex-col gap-2 ${darkAndLightText}`}>
                    <li>
                      <strong>Top Level Domain: </strong>
                      {country.tld}
                    </li>
                    <li>
                      <strong>Currencies: </strong>
                      {[Object.keys(country.currencies)[0]]}
                    </li>
                    <li>
                      <strong>Languages:</strong>{' '}
                      {Object.values(country.languages).join(', ')}
                    </li>
                  </ul>

                  {country.borders && (
                    <div className={`flex flex-col gap-4 ${darkAndLightText}`}>
                      <h1 className="font-bold text-[16px]">
                        Border Countries
                      </h1>
                      <div className="flex flex-row flex-wrap items-center gap-2 ">
                        {getBorderCountryNames(country.borders).map(
                          (borderName) => (
                            <NavLink to={`/countries/${borderName}`}>
                              {' '}
                              <button
                                className={` py-2 px-9 rounded-md shadow-md ${darkAndLightBackground}`}
                                key={borderName}
                              >
                                {borderName}
                              </button>
                            </NavLink>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </article>
              </>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryInfo;
