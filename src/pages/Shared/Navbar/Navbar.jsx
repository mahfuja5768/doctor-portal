import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <React.Fragment>
      {user?.uid && (
        <li>
          <h1 className="font-bold text-xl text-error">
            User Email: {user.email}
          </h1>
        </li>
      )}
      <li>
        <Link to="/" className="font-bold text-xl">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-bold text-xl">
          About
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="font-bold text-xl">
          Appointment
        </Link>
      </li>
      <li>
        <Link to="/contactUs" className="font-bold text-xl">
          Contact Us
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="font-bold text-xl">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button onClick={handleLogOut} className="font-bold text-xl">
                Sign out
              </button>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="font-bold text-xl">
            Login
          </Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="font-bold text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case font-bold text-2xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
          <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
      </div>
    </div>
  );
};

export default Navbar;
