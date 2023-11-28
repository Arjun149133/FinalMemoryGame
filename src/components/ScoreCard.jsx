import React, { useEffect, useState } from "react";

const ScoreCard = ({score, highScore, setHighScore}) => {

  useEffect(() => {
    if(score > highScore) {
      localStorage.setItem('highscore', score.toString());
      setHighScore(score);
    }
  }, [score, highScore])

  return (
    <div className=" flex flex-col items-center mb-7">
      <div className=" bg-gray-300 p-3 opacity-80 rounded-lg">
        <div className=" flex justify-center font-serif text-xl font-bold mb-4">
          ScoreCard : {score}
        </div>
        <div className=" text-lg font-semibold">
          <div className=" text-lg font-extrabold text-amber-700">HighScore : {highScore} </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
