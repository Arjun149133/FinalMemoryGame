import React from "react";
import image from "../assets/Pokeball.png";
import ScoreCard from "./ScoreCard";

const Header = ({ gamepage, setGamepage, setQuitPage, setScore }) => {
  const handleQuit = () => {
    setGamepage(false);
    setQuitPage(false);
    setScore(0);
  };

  return (
    <div
      className={` flex flex-col justify-center items-center ${
        gamepage ? " h-max" : " h-screen"
      } mb-2`}
    >
      <div className=" flex justify-center hover:cursor-pointer " onClick={handleQuit}>
        <img src={image} alt="image" className=" h-14 mt-4 " />
        <span className=" flex items-center text-3xl ml-2 font-semibold">
          <p className=" text-red-700 font-extrabold mr-2">Pokemon</p> Memory
          Game
        </span>
      </div>
    </div>
  );
};

export default Header;
