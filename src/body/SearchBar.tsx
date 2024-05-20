import { IoSearch } from 'react-icons/io5';
import SelectCountry from './SelectCountry';

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
    <div
      className="flex flex-col gap-9 min-[768px]:flex-row min-[768px]:justify-between min-[1104px]:mx-[7rem]"
      id="top"
    >
      <div
        className={`${
          darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]'
        } py-4 flex flex-row items-center gap-6 px-8 shadow-md rounded-lg mt-[2rem]  min-[768px]:ml-6 max-[320px]:px-6 max-[320px]:py-3`}
      >
        <span className="text-[1.5rem] text-[#C4C4C4] max-[320px]:text-[1.2rem]">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`py-1 border-none outline-none  text-[#C4C4C4] font-normal px-3 w-full min-[768px]:ml-5 max-[320px]:px-2 max-[320px]:text-[.8rem] ${
            darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]'
          }`}
          value={searchedInput.toLowerCase()}
          onChange={onHandleSearch}
        />
      </div>
      <SelectCountry
        optionTitle={optionTitle}
        setOptionTitle={setOptionTitle}
        applyingFilters={applyingFilters}
        darkTheme={darkTheme}
      />
    </div>
  );
};

export default SearchBar;
