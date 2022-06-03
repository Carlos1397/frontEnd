import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const LinkStyle = ({ isActive }) => {
    return {
      margin: isActive ? "20px" : "20px",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "overline" : "underline",
    };
  };
  const auth = useAuth();
  return (
    <div className="">
      <nav className="flex relative justify-center text-white  bg-gradient-to-r from-cyan-500 to-blue-500">
        <NavLink style={LinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={LinkStyle} to="/mantenimiento">
          Mantenimiento
        </NavLink>
        <NavLink style={LinkStyle} to="/usuario">
          Usuario
        </NavLink>
        {!auth.auth && (
          <NavLink style={LinkStyle} to="/login">
            Ingresar
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
