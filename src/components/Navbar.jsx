import sidebaricon from "../assets/sidebaricon.svg";
import searchicon from "../assets/searchicon.svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className=" font-Intertight z-30 w-full h-[3rem] top-0 sticky overflow-hidden transition-all duration-500 ease-linier flex flex-row items-center justify-between gap-x-8 py-4 shadow-sm bg-white">
      <div className=" flex flex-col md:hidden ">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer mx-12 flex h-[1.7rem] w-[1.7rem] rounded-md bg-white hover:shadow-fixed transition-all duration-500 ease-out items-center justify-center"
        >
          <img className="h-[1.5rem] w-[1.5rem] " src={sidebaricon} alt="" />
        </button>
      </div>
      <div
        onClick={toggleSidebar}
        className="cursor-pointer px-24 text-l font-bold w-fit min-w-260 text-gray-900  hidden md:flex"
      >
        Foodcourt Aisyah Pringsewu
      </div>

      <div className=" md:w-[30rem] w-[10rem] flex mx-12 items-center justify-end">
        <button className="group relative pl-56 pr-12 py-6 w-fit rounded-2xl text-[12px] gap-12 flex flex-row border border-zinc-600 ">
          Search{" "}
          <img
            src={searchicon}
            className="absolute w-16 left-12 group-hover:top-2 top-7 h-16 transition-all transform duration-300 ease-out"
            alt=""
          />
        </button>

        <nav className="items-center font-medium  justify-center w-fit gap-x-12 mx-12 text-sm text-gray-700 hidden md:flex">
          <a
            href="#"
            className=" hover:shadow-fixed bg-white  px-24 rounded-sm py-6 border-zinc-200 "
          >
            Products
          </a>
          <a
            href="#"
            className=" hover:shadow-fixed bg-white  px-24 rounded-sm py-6 border-zinc-200 "
          >
            About Us
          </a>
          <a
            href="#"
            className=" hover:shadow-fixed bg-white  px-24 rounded-sm py-6 border-zinc-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
