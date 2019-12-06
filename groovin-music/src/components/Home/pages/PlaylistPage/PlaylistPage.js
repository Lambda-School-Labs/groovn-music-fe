import React from 'react';
import playlistCover from '../../images/genaric_playlist_img.jpg';
import './PlaylistPage.css';

function PlaylistPage() {
  return (
    <div className="playlistPage-container">
      <div className="playlistPage-main">
        <h1>Playlist Main Content</h1>
        <div className="playlist-name-container">
          <h2>playlist name</h2>
        </div>
        <div className="playlist-image-container">
          <Track />
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;

function Track(props) {
  return (
    <>
      <img
        className="playlist-image-container"
        src={require('../../images/genaric_playlist_img.jpg')}
        atl="Genaric_playlist_img"
      />
    </>
  );
}
