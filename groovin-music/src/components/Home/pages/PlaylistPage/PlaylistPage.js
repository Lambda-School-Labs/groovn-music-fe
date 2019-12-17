import React from 'react';
import './PlaylistPage.css';

function PlaylistPage() {
  return (
    <div className="playlistPage-container">
      <Playlist
        playlistName={playlistName}
        playlistImg={PlaylistImg}
        tracks={testTracks}
      />
    </div>
  );
}

export default PlaylistPage;

function Playlist(props) {
  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <h1>{props.playlistName}</h1>
        <img
          alt=""
          className="playlist-image-container"
          src={require('../../images/genaric_playlist_img.jpg')}
        />
      </div>
      <div className="track-list">
        <div className="track-lable">
          <h1>Song </h1>
          <h1>Artist</h1>
          <h1>Album</h1>
        </div>
        <hr />
        {props.tracks.map(track => (
          <>
            <div className="track">
              <h2>{track.name}</h2>
              <h2>{track.artist}</h2>
              <h2>{track.album}</h2>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

//XML for the play butotn - still needs to be set up
/*
<img
  className="play-button"
  src={require('../../images/play-button.png')}
  alt=""
/>
*/

//dummy data
const PlaylistImg = '../../images/genaric_playlist_img.jpg';
const playlistName = 'Test Playlist';
const testTracks = [
  {
    name: 'test-name 1',
    artist: 'test-artist 1',
    album: 'test-album 1',
  },
  {
    name: 'test-name 2',
    artist: 'test-artist 2',
    album: 'test-album 2',
  },
  {
    name: 'test-name 3',
    artist: 'test-artist 3',
    album: 'test-album 3',
  },
  {
    name: 'test-name 4',
    artist: 'test-artist 4',
    album: 'test-album 4',
  },
  {
    name: 'test-name 5',
    artist: 'test-artist 5',
    album: 'test-album 5',
  },
  {
    name: 'test-name 6',
    artist: 'test-artist 6',
    album: 'test-album 6',
  },
  {
    name: 'test-name 7',
    artist: 'test-artist 7',
    album: 'test-album 7',
  },
  {
    name: 'test-name 8',
    artist: 'test-artist 8',
    album: 'test-album 8',
  },
  {
    name: 'test-name 9',
    artist: 'test-artist 9',
    album: 'test-album 9',
  },
  {
    name: 'test-name 10',
    artist: 'test-artist 10',
    album: 'test-album 10',
  },
];
