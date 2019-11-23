import React from 'react';
import './SettingsPage.css';
import Sidebar from '../../Home/Sidebar';

function SettingsPage() {
  return (
    <div className="playlistPage-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <h1>Settings Main Content</h1>
      </div>
    </div>
  );
}

export default SettingsPage;
