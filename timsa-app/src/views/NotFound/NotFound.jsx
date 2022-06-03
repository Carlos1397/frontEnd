import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="flex-none py-4 px-4 justify-center items-center h-screen bg-slate-800">
      <h1 className="text-white text-4xl">¡Ay! ¡No hay nada aquí!</h1>
      <Link className="text-white underline" to="/">
        Ir a la pagina principal
      </Link>
    </main>
  );
};

export default NotFound;
