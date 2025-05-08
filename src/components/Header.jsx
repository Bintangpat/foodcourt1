const Header = () => {
  return (
    <header className="fixed z-20 w-dvw grid md:grid-cols-3 grid-cols-2 items-center justify-between px-8 py-4 shadow-sm bg-white">
      <div className="text-l font-bold text-gray-900 font-Intertight">
        Foodcourt Aisyah Pringsewu
      </div>
      <div className=" w-full items-center gap-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="text-center px-4 py-1.5 border w-full rounded-full text-sm"
        />
      </div>
      <nav className="items-center justify-center w-full gap-x-12 space-x-6 text-sm text-gray-700 hidden md:flex">
        <a href="#" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          Rooms
        </a>
        <a href="#" className="hover:text-blue-600">
          Inspiration
        </a>
        <a href="#" className="hover:text-blue-600">
          Latest
        </a>
        <a href="#" className="hover:text-blue-600">
          Info
        </a>
      </nav>
    </header>
  );
};

export default Header;
