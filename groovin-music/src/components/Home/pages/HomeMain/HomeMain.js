import React from 'React';
import {
  AlbumOfWeek,
  RecentlyPlayed,
  MixTapes,
  FeaturedArtist,
  Playlists,
} from './';

function HomeMain() {
  return (
    <div className="main">
      <AlbumOfWeek />
      <RecentlyPlayed />
      <MixTapes />
      <FeaturedArtist />
      <Playlists />
    </div>
  );
}

export default HomeMain;
