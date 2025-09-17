import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const { isEducator } = useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex w-full items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        {user && (
          <>
            <button
              onClick={() => navigate("/educator")}
              className="hover:underline"
            >
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>

            {/* Divider */}
            <span className="text-gray-400">|</span>

            <Link to="/my-enrollments" className="hover:underline">
              My Enrollments
            </Link>
          </>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4 text-gray-600">
        {user && (
          <>
            <button onClick={() => navigate("/educator")} className="text-sm">
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>

            {/* Divider */}
            <span className="text-gray-300">|</span>

            <Link to="/my-enrollments" className="text-sm">
              My Enrollments
            </Link>
          </>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User Icon" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
