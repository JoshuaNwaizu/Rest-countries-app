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
    setOpenSelectedBox(!openSelectBox);
    applyingFilters();
    console.log(item);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div
          className={`flex items-center justify-between w-[60%] px-6 py-4 ${darkAndLightBackground}  shadow-md rounded-lg`}
        >
          <p className={` ${darkTheme ? 'text-[#fff]' : 'text-[#4e5b62]'}`}>
            {optionTitle ? optionTitle : 'Filter by Region'}
          </p>
          <span
            className={`text-[1.5rem] cursor-pointer transition-all duration-150 ${
              openSelectBox ? 'rotate-180' : ''
            } ${darkAndLightText}`}
            onClick={() => handleOpenSelect()}
          >
            <RiArrowDropDownLine />
          </span>
        </div>

        <div className={` ${openSelectBox ? 'block' : 'hidden'}`}>
          <div
            className={`flex flex-col w-[55.5%] gap-2 px-6 py-4 ${darkAndLightBackground} ] shadow-md rounded-lg absolute mt-2`}
          >
            {continent.map((item: string) => (
              <p
                key={item}
                onClick={() => handleSelectOption(item)}
                className={darkAndLightText}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCountry;
