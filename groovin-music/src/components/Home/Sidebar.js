import React from 'react';
import { NavLink } from 'react-router-dom';

// import Homepage from './Homepage.js'
import PlaylistPage from '../pages/PlaylistPage/PlaylistPage.js';
import DiscoverPage from '../pages/DiscoverPage/DiscoverPage.js';
import PlayerPage from '../pages/PlayerPage/PlayerPage.js';
import SettingsPage from '../pages/SettingsPage/SettingsPage.js';

import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <input type="text" name="search" placeholder="search" />
      <NavLink to="/playlist-page">Playlist</NavLink>
      <NavLink to="/discover-page">Discover</NavLink>
      <NavLink to="/player-page">Player</NavLink>
      <NavLink to="/settings-page">Settings</NavLink>
    </div>
  );
}
