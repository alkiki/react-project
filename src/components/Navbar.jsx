import { NavLink } from "react-router-dom";
const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black bg-opacity-50 rounded-md px-3 py-2"
      : " text-white hover:bg-black hover:bg-opacity-50 rounded-md px-3 py-2";
  return (
    <div>
      <nav
        className="fixed w-full bg-indigo-700 z-50"
        style={{
          background:
            "linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(205,76,116,1) 38%, rgba(162,80,193,1) 47%, rgba(101,100,190,1) 72%, rgba(67,56,202,1) 100%, rgba(75,114,171,1) 100%, rgba(92,115,233,1) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <span className="hidden md:block text-white text-3xl font-bold ml-2 font-family: Helvetica Neue">
                  ual: CollabHub
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Discover{" "}
                  </NavLink>
                  <NavLink to="/showcase" className={linkClass}>
                    Showcase
                  </NavLink>
                  <NavLink to="/profile" className={linkClass}>
                    Profile
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
