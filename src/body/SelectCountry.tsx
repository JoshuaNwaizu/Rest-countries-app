// import React from 'react';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface CountryProps {
  optionTitle: string | undefined;
  setOptionTitle: (title: string) => void;
  applyingFilters: () => void;
  darkTheme: boolean;
}

const continent: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SelectCountry: React.FC<CountryProps> = ({
  optionTitle,
  setOptionTitle,
  applyingFilters,
  darkTheme,
}) => {
  const [openSelectBox, setOpenSelectedBox] = useState<boolean>(false);

  const darkAndLightText = darkTheme ? 'text-[#fff]' : 'text-[#4e5b62]';
  const darkAndLightBackground = darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]';

  const handleOpenSelect = (): void => {
    setOpenSelectedBox(!openSelectBox);
  };

  const handleSelectOption = (item: string): void => {
    setOptionTitle(item);
    applyingFilters();
    setOpenSelectedBox(!openSelectBox);
  };

  return (
    <>
      <div className="flex flex-col min-[768px]:items-center min-[768px]:justify-center min-[768px]:mt-[2rem]  min-[768px]:mr-6">
        <div
          className={`flex items-center justify-between w-[60%] px-6 py-4 ${darkAndLightBackground}  shadow-md rounded-lg min-[768px]:w-[100%]`}
          onClick={handleOpenSelect}
        >
          <p className={` ${darkTheme ? 'text-[#fff]' : 'text-[#4e5b62]'} `}>
            {optionTitle ? optionTitle : 'Filter by Region'}
          </p>
          <span
            className={`text-[1.5rem] cursor-pointer transition-all duration-150 ${
              openSelectBox ? 'rotate-180' : ''
            } ${darkAndLightText}`}
          >
            <RiArrowDropDownLine />
          </span>
        </div>

        <div className={` ${openSelectBox ? 'block' : 'hidden'}`}>
          <div
            className={`flex flex-col w-[55.5%] gap-2 px-6 py-4 ${darkAndLightBackground} ] shadow-md rounded-lg absolute mt-2 min-[768px]:right-4  min-[768px]:w-[24.5%]`}
          >
            {continent.map((region: string) => (
              <p
                key={region}
                onClick={() => handleSelectOption(region)}
                className={darkAndLightText}
              >
                {region}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCountry;
