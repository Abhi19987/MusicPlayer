import React, { useState } from "react";
import "./HomePage.css";
import { GetSongs } from "../GetSongs/getSong.tsx";
import { Song } from "../Song/Song.tsx";

export const HomePage = () => {
  const [tracks, setTracks] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (event) => {
    console.log(event.target.value);

    setInputValue(event.target.value);
  };

  const searchSongs = async () => {
    const songs = await GetSongs(inputValue);
    console.log(songs);

    setTracks(songs);
  };

  return (
    <div className="container-fluid root">
      <div className="brand justify-content-center">My Music</div>

      <div className="col searchBar justify-content-center">
        <input
          className="searchBox col-4"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onInputChange}
        />
        <button
          className="searchButton btn btn-outline-success"
          onClick={searchSongs}
        >
          Search
        </button>
      </div>

      <div className="container songList">
        <div className="row">
          {tracks.map((track) => {
            return (
              <div className="col songs" key={track.id}>
                <Song
                  audioUrl={track.preview_url}
                  imageUrl={track.album.images[1].url}
                  songName={track.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
