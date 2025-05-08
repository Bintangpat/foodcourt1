/** @format */

const BodyBase = ({ isOpen, children }) => {
  return (
    <div
      className={`${isOpen ? "ml-250" : "-ml-10"} z-200 transition-all h-fit overflow-hidden box-border max-w-screen w-ft  duration-500 ease-out ml-0 relative `}
    >
      {children}
    </div>
  );
};

export default BodyBase;
