import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import logo from "../../../images/logo-icon.png";
const Navbar = () => {
  const { user, userLogout } = useContext(AuthProvider);


  const handleLogout = () => {
  userLogout()
  .then()
  .catch(err => console.log(err));
  }
  return (
    <header className="bg-black">
      <div className="navbar max-w-6xl mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link>
                <li className="text-black font-3xl font-semibold">Home</li>
              </Link>
              <Link>
                <li className="text-black font-3xl font-semibold">Services</li>
              </Link>
            </ul>
          </div>
          <Link className="normal-case text-xl flex items-center">
            <img src={logo} alt="" className="w-12 mr-3" />{" "}
            <span className="font-bold text-3xl text-white uppercase ">
              Justice
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/">
              <li className="text-white font-3xl font-semibold mr-5 hover:text-orange-600">
                Home
              </li>
            </Link>
            <Link to="/services">
              <li className="text-white font-3xl font-semibold mr-5 hover:text-orange-600">
                Services
              </li>
            </Link>

            {user?.uid && (
              <>
                <Link to="/review">
                  <li className="text-white font-3xl font-semibold mr-5 hover:text-orange-600">
                    My Reviews
                  </li>
                </Link>
                <Link to="/add">
                  <li className="text-white font-3xl font-semibold mr-5 hover:text-orange-600">
                    Add Service
                  </li>
                </Link>
               
                  <li className="text-white font-3xl font-semibold mr-5 hover:text-orange-600 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
               
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!user?.uid && (
          <>
            <Link to="/register">
              {" "}
              <button className="btn btn-warning px-6 text-black font-semibold">
                Register
              </button>
            </Link>
            <Link to="/login">
              {" "}
              <button className="btn btn-primary px-6 text-white ml-5 font-semibold">
                Login
              </button>
            </Link>
          </>
          )}
         {
          user?.uid && 
          <> <img src={user?.photoURL} alt="" className="w-14 rounded-full mr-5 border-2 border-orange-600"/>
          <span className="text-warning text-2xl ">{user?.displayName}</span></>
         }
        </div>
      </div>
    </header>
  );
};

export default Navbar;
