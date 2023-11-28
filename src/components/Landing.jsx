import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

export default function Landing({
  gamepage,
  setGamepage,
  setGameLevel,
  gameLevel,
  audio,
  music,
  setMusic,
  handleToggleMusic,
}) {
  const handleRepoClick = () => {
    window.location.href = "https://github.com/Arjun149133/Po";
  };

  const handleGameLevel = (value) => {
    setGameLevel(value);
  };

  const handleClose = () => {
    setGamepage(true);
  };

  const handleDialogClick = (event) => {
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <Dialog
        open={!gamepage}
        onClick={handleDialogClick}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {<p className=" font-serif font-bold">What would you like to do?</p>}
        </DialogTitle>
        <div className=" flex justify-center">
          <DialogActions>
            <div className=" flex flex-col">
              <div>
                <Button onClick={() => handleGameLevel("easy")}>
                  <p
                    className={`font-semibold ${
                      gameLevel === "easy"
                        ? " text-red-600 bg-gray-400 rounded-lg p-2"
                        : " hover:bg-gray-300 p-2 rounded-lg"
                    }`}
                  >
                    Easy
                  </p>
                </Button>
                <Button onClick={() => handleGameLevel("medium")}>
                  <p
                    className={`font-semibold ${
                      gameLevel === "medium"
                        ? " text-red-600 bg-gray-400 rounded-lg p-2"
                        : " hover:bg-gray-300 p-2 rounded-lg"
                    }`}
                  >
                    medium
                  </p>
                </Button>
                <Button onClick={() => handleGameLevel("hard")}>
                  <p
                    className={`font-semibold ${
                      gameLevel === "hard"
                        ? " text-red-600 bg-gray-400 rounded-lg p-2"
                        : " hover:bg-gray-300 p-2 rounded-lg"
                    }`}
                  >
                    hard
                  </p>
                </Button>
              </div>
              <div className=" flex flex-col">
                <Button onClick={handleClose}>
                  <p className=" font-bold hover:bg-gray-300 p-2 rounded-lg">
                    Start Game
                  </p>
                </Button>
                <Button onClick={handleRepoClick}>
                  <p className="hover:bg-gray-300 p-2 rounded-lg bg-gray-100">
                    Git Repo
                  </p>
                </Button>
                <p className=" font-bold  text-center text-base">Audio:</p>
                <Button>
                  <p className="hover:bg-gray-300 p-2 rounded-lg bg-gray-100 text-red-600" onClick={handleToggleMusic}>
                     {music ? <MdMusicNote /> : <MdMusicOff />}{" "}
                  </p>
                </Button>
              </div>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
