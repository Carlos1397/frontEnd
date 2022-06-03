import React from "react";

const Card = () => {
  return (
    <div className=" max-w-sm">
      <div className=" rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190122-MPM-ERELIS-AUTO-DEPORTIVO-MAS-BARATO-01.jpg"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl">Tu Auto</div>
          <p className="text-gray-700 text-base">En las mejores manos</p>
        </div>
        <div className="py-4 px-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #profesionales
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #herramientas
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #mantenimiento
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
