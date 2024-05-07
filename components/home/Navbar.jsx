export default function Navbar({ onOpen }) {
  return (
    <nav className="w-full pt-5 z-20 flex items-center justify-center h-[10vh] text-green-600">
      <div className="flex flex-row w-full h-full max-w-[90%] object-contain items-center justify-between">
        <div className="h-full text-white text-xl">
          Attendez
        </div>
        <div className="flex flex-row items-center">
          <div className="text-sm md:text-base lg:text-xl border md:border-2 border-green-600 py-0.5 px-2 md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-full">
            <button onClick={onOpen}>menu &crarr;</button>
          </div>
          {/* <div className="m-2 lg:m-5 space-y-1 md:space-y-2 lg:space-y-3">
            <div className="w-10 lg:w-16 bg-green-600 h-1"></div>
            <div className="w-10 lg:w-16 bg-green-600 h-1"></div>
            <div className="w-10 lg:w-16 bg-green-600 h-1"></div>
          </div> */}
          {/* <MenuOutlined /> */}
        </div>
      </div>
    </nav>
  );
}
