import React, { useEffect, useState } from "react";
import img from "./assets/pokemon-bg.png";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import Landing from "./components/Landing";
import GameOver from "./components/GameOver";
import Music from "./components/Music";
import Winner from "./components/Winner";

const App = () => {
  const [score, setScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [gamepage, setGamepage] = useState(false);
  const [gameLevel, setGameLevel] = useState("easy");
  const [winner, setWinner] = useState(false);
  const [quitPage, setQuitPage] = useState(false)
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem('highscore')) || 0
  )
  const [music, setMusic] = useState(false);
  const [audio] = useState(
    new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3')
  );

  const handleToggleMusic = () => {
    if (audio.paused) {
      audio.play();
      setMusic(!music);
    } else {
      audio.pause();
      setMusic(!music);
    }
  };

  useEffect(() => {
    if(score===25) {
      setWinner(true);
    }
  },[score, highScore]);

  return (
    <div className="  bg-[url('./assets/pokemon-bg.png')] bg-cover bg-center h-full md:h-screen flex flex-col justify-center">
      <Music music={music} setMusic={setMusic} audio={audio} handleToggleMusic={handleToggleMusic} />
      <Header gamepage={gamepage} setGamepage={setGamepage} setQuitPage={setQuitPage} setScore={setScore} />
      {gamepage ? <ScoreCard score={score} highScore={highScore} setHighScore={setHighScore} /> : <></>}
      {gamepage ? <PokemonList gameLevel={gameLevel} setQuitPage={setQuitPage} memory={memory} setMemory={setMemory} setScore={setScore} /> : <Landing gamepage={gamepage} setGamepage={setGamepage} setGameLevel={setGameLevel} gameLevel={gameLevel} audio={audio} music={music} setMusic={setMusic} handleToggleMusic={handleToggleMusic} />}
      {quitPage ? <GameOver setGamepage={setGamepage} setQuitPage={setQuitPage} quitPage={quitPage} score={score} setScore={setScore} highscore={highScore} /> : <></>}
      {winner ? <Winner setGamepage={setGamepage} score={score} setScore={setScore} highscore={highScore} winner={winner} setWinner={setWinner} /> : <></>}
    </div>
  );
};

export default App;
//comment
