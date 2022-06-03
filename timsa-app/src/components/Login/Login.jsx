import React, { useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleAccessLogin = () => {
    auth.login(user);
    console.log(redirectPath);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="min-h-screen max-w-screen-3xl bg-slate-800">
      <div className="px-10 py-10 ">
        <div className="px-10 py-10 bg-white rounded-lg ">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            INICIA SESIÓN
          </h1>
          <div className="mb-4  px-4 ">
            <label className="block text-gray-900 text-lg font-bold py-4">
              Username:{" "}
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-4"
              type="text"
              placeholder="Ingrese su Correo"
              onChange={(evento) => setUser(evento.target.value)}
            />
          </div>
          <div className="mb-4  px-4">
            <label className="block text-gray-900 text-lg font-bold py-4">
              Contraseña:{" "}
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-4"
              type="password"
              onChange={(evento) => setUser(evento.target.value)}
            />
          </div>
          <div className="px-4">
            <button
              className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              onClick={handleAccessLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
