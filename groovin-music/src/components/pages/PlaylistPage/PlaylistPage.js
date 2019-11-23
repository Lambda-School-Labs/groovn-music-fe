import React from 'react';
import Sidebar from '../../Home/Sidebar';
import './PlaylistPage.css';
function PlaylistPage() {
  return (
    <div className="playlistPage-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <h1>Playlist Main Content</h1>
      </div>
    </div>
  );
}

export default PlaylistPage;
