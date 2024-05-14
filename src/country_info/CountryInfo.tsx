// import React from 'react'

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

type CountryInfo = {
  flags: { png: string; svg: string };
  name: {
    common: string;
    official: string;
    nativeName: { ron: { official: string; common: string }; official: string };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: any;
  borders: string[];
  languages: object;
};

const CountryInfo = () => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo[]>([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data: CountryInfo[] = await res.json();
        setCountryInfo(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();
  }, []);

  return (
    <section className="mx-4 ">
      <Link to="/">
        <button className="bg-[#fff] flex py-2 px-6 items-center gap-2 rounded-md shadow-md">
          <BsArrowLeft /> <span>Back</span>{' '}
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center mx-4 my-[4rem]">
        <div className="w-[335px]">
          {countryInfo.map((country) => (
            <>
              <div key={country.flags.png}>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="w-[355px] rounded-md h-[255px]"
                />
              </div>

              <article className="mt-[2rem] flex flex-col justify-center gap-[2rem]">
                <div className="flex flex-col gap-[1rem]">
                  <div>
                    <h1 className="font-extrabold text-xl text-[#111517]">
                      {country.name.common}
                    </h1>
                  </div>

                  <ul className="flex flex-col gap-2">
                    <li>
                      <strong>Native Name: </strong>
                      {country.name.official}
                    </li>
                    <li>
                      <strong>Population: </strong>
                      {country.population.toLocaleString('en-US')}
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

                <ul className="flex flex-col gap-2">
                  <li>
                    <strong>Top Level Domain: </strong>
                    {country.tld}
                  </li>
                  <li>
                    <strong>Currencies: </strong> {country.currencies[0]}
                  </li>
                  <li>
                    <strong>Languages:</strong>
                  </li>
                </ul>

                {country.borders && (
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[16px]">Border Countries</h1>
                    <div className="flex flex-row flex-wrap items-center gap-2 ">
                      {country.borders.map((item) => (
                        <Link to={`/countries/border${item}`}>
                          <button
                            className="bg-[#fff] py-2 px-9 rounded-md shadow-md"
                            key={item}
                          >
                            {item}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryInfo;
