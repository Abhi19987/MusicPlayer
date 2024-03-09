import React from "react";
import "./Song.css";

type ISongType = {
  audioUrl: string;
  imageUrl: string;
  songName: string;
};

export const Song = (props: ISongType) => {
  const { songName, imageUrl, audioUrl } = props;
  return (
    <div className="songCard">
      <img src={imageUrl} alt="" />
      <div className="songName">{songName}</div>
      <audio src={audioUrl} controls></audio>
    </div>
  );
};
