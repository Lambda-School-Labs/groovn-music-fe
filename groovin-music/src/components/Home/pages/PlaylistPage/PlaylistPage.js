import React from 'react';
import Sidebar from '../Sidebar/sidebar.js';
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
