// import React from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BorderInfo = () => {
  const [borderData, setBorderData] = useState<string[]>([]);

  const border = useParams();

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/border/${border}`
        );
        const data: string[] = await res.json();
        setBorderData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();
  }, []);

  return <div>{'kkk'}</div>;
};

export default BorderInfo;
