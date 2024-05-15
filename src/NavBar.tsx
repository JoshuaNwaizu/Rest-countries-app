import { HiOutlineMoon } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

type Scrolled = boolean;
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState<Scrolled>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 w-full left-0 bg-[#FFFFFF] ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-between mx-4 h-[5rem]">
        <h2 className="text-[16px] font-extrabold leading-[20px] cursor-pointer ">
          Where in the world?
        </h2>
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-[16px]">
            <HiOutlineMoon />
          </span>

          <span className="text-[14px]">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
