import { IoSearch } from 'react-icons/io5';
import SelectCountry from './SelectCountry';
import React from 'react';

interface SearchProps {
  searchedInput: string;
  onHandleSearch: (searchInput: any) => void;
  optionTitle: string | undefined;
  setOptionTitle: (title: string) => void;
  applyingFilters: () => void;
  darkTheme: boolean;
  handleDarkMode: () => void;
}
const SearchBar: React.FC<SearchProps> = ({
  searchedInput,
  onHandleSearch,
  optionTitle,
  setOptionTitle,
  applyingFilters,
  darkTheme,
}) => {
  return (
    <div className="flex flex-col gap-9">
      <div className="bg-[#fff] py-4 flex flex-row items-center gap-6 px-8 shadow-md rounded-lg">
        <span className="text-[1.5rem] text-[#C4C4C4]">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search for a country"
          className="py-1 border-none outline-none bg-[#fff] text-[#C4C4C4] font-normal px-3 w-full"
          value={searchedInput.toLowerCase()}
          onChange={onHandleSearch}
        />
      </div>
      <SelectCountry
        optionTitle={optionTitle}
        setOptionTitle={setOptionTitle}
        applyingFilters={applyingFilters}
      />
    </div>
  );
};

export default SearchBar;
