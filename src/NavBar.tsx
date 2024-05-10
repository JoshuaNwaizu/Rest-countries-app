import { HiOutlineMoon } from 'react-icons/hi2';
const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full left-0 bg-[#FFFFFF]">
      <div className="flex flex-row items-center justify-between mx-4 h-[5rem]">
        <h2 className="text-[14px] font-extrabold leading-[20px] cursor-pointer ">
          Where in the world?
        </h2>
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-[16px]">
            <HiOutlineMoon />
          </span>

          <span className="text-[12px]">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
