import React from 'react';
import AlbumOfWeek from './AlbumOfWeek.js';
import RecentlyPlayed from './RecentlyPlayed.js';
import MixTapes from './MixTapes.js';
import FeaturedArtist from './FeaturedArtist.js';
import Playlists from './Playlists.js';

function HomeMain() {
  return (
    <div className="homeMain-main">
      <AlbumOfWeek />
      <RecentlyPlayed />
      <MixTapes />
      <FeaturedArtist />
      <Playlists />
    </div>
  );
}

export default HomeMain;
