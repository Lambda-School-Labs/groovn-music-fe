import React from 'react';
import './PlayerPage.css';
import PlayerControls from '../../../MusicPlayer/PlayerControls.js';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

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
      <Player />
    </div>
  );
}

function Player() {
  return (
    <SpotifyPlayer
      uri="spotify:track:2IcjuFPUZISzX2LLhKZJN0"
      size={size}
      view={view}
      theme={theme}
    />
  );
}

const currentSong = {
  songTitle: 'Test-SongTitle',
  artistName: 'Test-ArtistName',
  albumName: 'Test-AblumName',
  songImg: 'https://i.redd.it/btchnm8ctq911.jpg',
};
