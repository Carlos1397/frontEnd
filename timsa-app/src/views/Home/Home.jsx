import React from "react";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div className="min-h-screen max-w-screen-3xl bg-slate-800 ">
      <div className="px-10 py-10">
        <div className="px-10 py-10 bg-white rounded-lg ">
          <h1 className="text-3xl font font-extrabold tracking-tight text-gray-900 ">
            Bienvenido a
          </h1>
          <h1 className=" text-4xl font font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            TIMSA
          </h1>
          <p className=" text-gray-500"></p> Contamos con los siguientes
          servicios:
          <div className="px-4 py-4">
            <ul className="list-decimal">
              <li>Reparaciones:</li>
              <ol className="list-disc list-inside">
                <li>Limpieza de inyectores</li>
                <li>Cambios de Anillos</li>
                <li>Cambio de Suspensión</li>
              </ol>
            </ul>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row gap-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
