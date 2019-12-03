import React from 'react';

import TrackList from './Tracklist'; 
import {MusicPlayerProvider} from "./MusicPlayerContext"

const App = () => {
  return (
    <MusicPlayerProvider>
    <div className= "container">
      <TrackList/>
    </div>
   </MusicPlayerProvider>
  );
}


export default App;
