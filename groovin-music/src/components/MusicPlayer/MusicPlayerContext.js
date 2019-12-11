
import React, { useState } from 'react';
import Home from './assets/Luther-Vandross-A-House-Is-Not-a-Home.mp3';
import Night from './assets/Luther-Vandross-If-Only-For-One-Night.mp3';
import Take from './assets/Luther-Vandross-Take-You-Out.mp3';


const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Luther-Vandross-A-House-Is-Not-A-Home',
        file: Home,
      },
      {
        name: 'If-Only-For-One-Night',
        file: Night,
      },
      {
        name: 'Take-You-Out',
        file: Take,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };