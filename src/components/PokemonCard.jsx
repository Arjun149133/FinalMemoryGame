import React from "react";

const PokemonCard = ({ name, image, onclick }) => {
  return (
    <div className=" bg-gray-400 rounded-lg flex flex-col m-auto lg:w-48 mb-7 bg-opacity-50 hover:bg-opacity-90 hover:cursor-grab shadow-lg shadow-gray-600 hover:shadow-gray-300" onClick={() => onclick(name)}>
      <img src={image} alt={name} className=" h-48" />
      <p className=" m-auto text-xl font-serif">{name}</p>
    </div>
  );
};

export default PokemonCard;
