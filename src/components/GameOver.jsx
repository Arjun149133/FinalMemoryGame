import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function GameOver({ setGamepage, setQuitPage, quitPage, score, setScore, highscore }) {
  const handleQuit = () => {
    setGamepage(false);
    setQuitPage(false);
    setScore(0);
  };

  const handleDialogClick = (event) => {
    event.stopPropagation();
  };

  const handlePlayAgain = () => {
    setGamepage(true);
    setQuitPage(false);
    setScore(0)
  };

  return (
    <React.Fragment>
      <Dialog
        open={quitPage}
        onClick={handleDialogClick}
        onClose={handleQuit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {<p className=" font-serif font-bold flex justify-center text-red-600 mb-3">Game Over!!</p>}
          {<p className=" font-serif font-bold">Your Score is: {score} </p>}
          {<p className=" font-serif font-bold text-amber-700">HighScore is: {highscore} </p>}
        </DialogTitle>
        <div className=" flex justify-center">
          <DialogActions>
            <div className=" flex flex-col">
              <Button onClick={handleQuit}>
                <p className=" font-bold hover:bg-gray-300 p-2 rounded-lg">Quit</p>
              </Button>
              <Button onClick={handlePlayAgain}><p className=" font-bold hover:bg-gray-300 p-2 rounded-lg">Play Again</p></Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
