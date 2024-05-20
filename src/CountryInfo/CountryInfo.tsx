// import React from 'react'

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Loading from '../Loading';

type CountryInfo = {
  cca3: string;
  flags: { alt: string; png: string; svg: string };
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
  area: string;
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
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
        const data: CountryInfo[] = await res.json();
        setCountryInfo(data);
        // setIsLoading(false);
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [name, setIsLoading]);

  return (
    <section className="py-[2rem] mx-4 -mt-6 pb-[5rem] max-[320px]:-mt-10">
      <Link
        to="/"
        className=""
      >
        <button
          className={` ${darkAndLightBackground}  ${darkAndLightText} flex py-2 px-6 items-center gap-2 rounded-md shadow-md max-[320px]:-ml-5`}
        >
          <BsArrowLeft /> <span>Back</span>{' '}
        </button>
      </Link>
      {isLoading ? (
        <Loading darkTheme={darkTheme} />
      ) : (
        <div className="flex flex-col items-center justify-center mx-4 mt-[4rem]  min-[1104px]:mx-[9rem]">
          <div className="w-[335px]  min-[768px]:w-[100%]  max-[320px]:w-[320px]">
            {countryInfo.map((country) => (
              <div
                key={country.population}
                className=" min-[1104px]:flex  min-[1104px]:flex-row  min-[1104px]:justify-between  min-[1104px]:gap-[4rem] min-[1104px]:w-[100%] "
              >
                <figure className="min-[768px]:flex min-[768px]:item-center min-[768px]:justify-center max-[320px]:flex max-[320px]:items-center max-[320px]:justify-center   min-[1104px]:items-center  ">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="w-[355px] rounded-md h-[255px] min-[768px]:w-[555px] min-[768px]:h-[355px]  min-[1104px]:w-[445px]  min-[1104px]:h-[355px] max-[320px]:w-[290px]"
                  />
                </figure>

                <article
                  className={`mt-[2rem] flex flex-col justify-center gap-[2rem]  max-[320px]:item-center max-[320px]:justify-center max-[320px]:ml-[1rem]`}
                >
                  <div className="flex flex-col gap-[1rem] min-[768px]:gap-[2rem] ">
                    <div>
                      <h1
                        className={`font-extrabold text-xl ${darkAndLightText} min-[768px]:text-center min-[768px]:text-2xl  min-[1280px]:text-left min-[1104px]:ml-[2rem] max-[320px]:text-md`}
                      >
                        {country.name.common}
                      </h1>
                    </div>

                    <div className="flex flex-col gap-7 min-[768px]:flex-row min-[768px]:gap-[5rem]  min-[768px]:justify-center  min-[1104px]:gap-[2.5rem] min-[1104px]:ml-8 max-[320px]:text-[.9rem]">
                      <ul className={`flex flex-col gap-2 ${darkAndLightText}`}>
                        {Object.values(country?.name?.nativeName)[0]
                          .official && (
                          <li>
                            <strong>Native Name: </strong>
                            {Object.values(country?.name?.nativeName)[0]
                              .official || country?.name?.official}
                          </li>
                        )}

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
                          {Object.values(country.languages)
                            .slice(0, 3)
                            .join(', ')}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {country.borders && (
                    <div
                      className={`flex flex-col gap-4 min-[768px]: ${darkAndLightText} `}
                    >
                      <h1 className="font-bold text-[16px] min-[768px]:text-center min-[768px]:text-2xl">
                        Border Countries
                      </h1>
                      <section>
                        <div className="flex flex-row flex-wrap items-center gap-2 min-[768px]:justify-center  min-[1104px]:flex-row min-[1104px]:justify-start ">
                          {country.borders.slice(0, 8).map((borderName) => {
                            const borderCountryName = getBorderCountryNames([
                              borderName,
                            ])[0];
                            return (
                              <Link
                                to={`/countries/${borderName}`}
                                key={borderName}
                              >
                                <button
                                  className={`py-2 px-9 rounded-md shadow-md ${darkAndLightBackground} max-[320px]:text-[.8rem]`}
                                >
                                  {borderCountryName}
                                </button>
                              </Link>
                            );
                          })}
                        </div>
                      </section>
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryInfo;
