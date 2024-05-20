import { useState, useEffect } from 'react';
import { HiOutlineMoon } from 'react-icons/hi2';
import { MdOutlineLightMode } from 'react-icons/md';

type Scrolled = boolean;
interface SearchProps {
  darkTheme: boolean;
  handleDarkMode: () => void;
}
const NavBar: React.FC<SearchProps> = ({ darkTheme, handleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState<Scrolled>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 w-full left-0 ${
        darkTheme ? 'bg-[#2B3844]' : 'bg-[#fff]'
      } ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div
        className={`flex flex-row items-center justify-between mx-4 h-[5rem]  min-[768px]:mx-[3rem] min-[1104px]:mx-[7rem] max-[320px]:h-[4rem] ${
          darkTheme ? 'text-[#fff]' : ''
        }`}
      >
        <h2 className="text-[16px] font-extrabold leading-[20px] cursor-pointer min-[768px]:text-[20px] max-[320px]:text-[14px]">
          Where in the world?
        </h2>
        <div
          className="flex flex-row items-center justify-center gap-2 "
          onClick={handleDarkMode}
        >
          <span className="text-[16px] min-[768px]:text-[20px]">
            {darkTheme ? <MdOutlineLightMode /> : <HiOutlineMoon />}
          </span>

          <span className="text-[14px] min-[768px]:text-[16px] cursor-pointer">
            {darkTheme ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
