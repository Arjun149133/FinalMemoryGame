import React, { useEffect, useState } from "react";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
const Music = ({music, audio, handleToggleMusic}) => {

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <div className=" text-4xl ml-7 mt-2">
      {music ? (
        <MdMusicNote
          onClick={handleToggleMusic}
          className=" border-2 border-red-500 rounded-full hover:border-yellow-500 hover:cursor-pointer"
        />
      ) : (
        <MdMusicOff
          onClick={handleToggleMusic}
          className=" border-2 border-red-500 rounded-full hover:border-yellow-500 hover:cursor-pointer"
        />
      )}
    </div>
  );
};

export default Music;
