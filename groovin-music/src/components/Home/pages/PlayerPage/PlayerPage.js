import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './PlayerPage.css';

export default function PlayerPage() {
  return (
    <div className="playerPage-container">
      <CurrentSong track={currentSong} />
    </div>
  );
}

function CurrentSong(props) {
  return (
    <div className="current-song">
      <div>
        <h1>{props.track.songTitle}</h1>
        <h2>{props.track.artistName}</h2>
        <h2>{props.track.albumName}</h2>
      </div>
      <img className="current-song-img" src={props.track.songImg} alt="" />
    </div>
  );
}

function Player() {
  return <div className="test-player"></div>;
}

const currentSong = {
  songTitle: 'Test-SongTitle',
  artistName: 'Test-ArtistName',
  albumName: 'Test-AblumName',
  songImg: 'https://i.redd.it/btchnm8ctq911.jpg',
};
