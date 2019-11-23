import React from 'react';
import Sidebar from '../../Home/Sidebar';
import './PlayerPage.css';

export default function PlayerPage() {
  return (
    <div className="playerPage-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <h1>Player Main Content</h1>
      </div>
    </div>
  );
}
