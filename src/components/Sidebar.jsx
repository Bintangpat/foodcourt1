import sidebaricon from "../assets/sidebaricon.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav
      className={`${
        isOpen ? "-left-0" : "-left-250"
      } fixed top-0 h-dvh w-250 bg-white flex px-12 flex-col font-Intertight gap-y-8 rounded-r-2xl z-0 transition-all duration-500 ease-out shadow-2xl`}
    >
      <div className="mt-6 flex flex-col ">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer flex h-[2rem] w-[2rem] rounded-md bg-zinc-700 hover:bg-zinc-600 border-zinc-600 transition-all duration-300 ease-out items-center justify-center"
        >
          <img
            className="h-[1.5rem] w-[1.5rem] invert"
            src={sidebaricon}
            alt=""
          />
        </button>
      </div>

      <a href="/dashboard/home" className="hover:text-blue-600 ">
        Dashboard
      </a>
      <a href="/dashboard/cust" className="hover:text-blue-600 ">
        Pelanggan
      </a>
      <a href="/dashboard/shop" className="hover:text-blue-600 ">
        Toko
      </a>
      <a href="/dashboard/report" className="hover:text-blue-600 ">
        Laporan
      </a>
    </nav>
  );
};

export default Sidebar;
