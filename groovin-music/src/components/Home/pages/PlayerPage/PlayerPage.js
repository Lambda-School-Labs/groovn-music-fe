import React, { useState } from 'react';
import './PlayerPage.css';

import SpotifyPlayer from 'react-spotify-player';

import { MainContext } from '../../../Context/MainContext';

export default function PlayerPage() {
  const [state, setState] = React.useContext(MainContext);

  const nextTrack = () => {
    if (state.currentTrackIndex < state.currentPlaylist.length - 1) {
      setState({ ...state, currentTrackIndex: state.currentTrackIndex + 1 });
    } else {
      setState({ ...state, currentTrackIndex: 0 });
    }
  };

  const previousTrack = () => {
    if (state.currentTrackIndex > 0) {
      setState({ ...state, currentTrackIndex: state.currentTrackIndex - 1 });
    } else {
      setState({
        ...state,
        currentTrackIndex: state.currentPlaylist.length - 1,
      });
    }
  };

  return (
    <div className="playerPage-container">
      <Player currentTrack={state.currentPlaylist[state.currentTrackIndex]} />
      <button onClick={previousTrack}>Previous Track</button>
      <button onClick={nextTrack}>Next Track</button>
    </div>
  );
}

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

function Player(props) {
  return (
    <SpotifyPlayer
      uri={`spotify:track:${props.currentTrack}`}
      size={size}
      view={view}
      theme={theme}
    />
  );
}

/*This functional component creates a recomended playlist via GQL mutation and then sets it to the MainContext.
  also renders the player and the form for creating the playlist.*/

//TODO separate the player rendering from this component
