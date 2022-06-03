import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
const Usuario = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className=" h-screen bg-slate-800 ">
      <div className=" px-4 py-4 items-end justify-end">
        <button
          className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="px-8 pt-8 pb-8 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className=" px-8 pt-8 pb-8 bg-white rounded-lg flex flex-col">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Hola! {auth.auth}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
