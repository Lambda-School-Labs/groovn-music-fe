import React from 'react';
import './DiscoverPage.css';
import Sidebar from '../Sidebar/Sidebar.js';

function DiscoverPage() {
  return (
    <div className="discoverPage-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <h1>Discover Page Main Content</h1>
      </div>
    </div>
  );
}

export default DiscoverPage;
