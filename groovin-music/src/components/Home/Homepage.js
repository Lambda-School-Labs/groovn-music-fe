import React from 'react';
import { Route } from 'react-router-dom';

import HomeMain from './pages/HomeMain/HomeMain.js';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage.js';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage.js';
import PlayerPage from './pages/PlayerPage/PlayerPage.js';
import SettingsPage from './pages/SettingsPage/SettingsPage.js';
import Sidebar from './Sidebar/Sidebar.js';

import './Homepage.css';

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* add nav bar here */}

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <Route exact path="/" component={HomeMain} />
        <Route path="/playlist-page" component={PlaylistPage} />
        <Route path="/discover-page" component={DiscoverPage} />
        <Route path="/player-page" component={PlayerPage} />
        <Route path="/settings-page" component={SettingsPage} />
      </div>

      {/* add footer here */}
    </div>
  );
}
