import React from 'react';
import { NavLink } from 'react-router-dom'

// import Homepage from './Homepage.js'
import PlayerPage from '../pages/PlayerPage/PlayerPage.js';
import PlaylistPage from '../pages/playlist-page/PlaylistPage.js';
import DiscoverPage from '../pages/DiscoverPage/DiscoverPage.js';
import SettingsPage from '../pages/SettingsPage/SettingsPage.js';

import './Sidebar.css';

export default function Sidebar() {
    return (
      <div className="sidebar">
        <input type="text" name="search" placeholder="search" />
        
        
        <NavLink exact path='/playlist-page' component={PlaylistPage}>Playlist</NavLink>
        <NavLink exact path='/discover-page' component={DiscoverPage}>Discover</NavLink>
        <NavLink exact path='/player-page' component={PlayerPage}>Player</NavLink>
        <NavLink exact path='/settings-page' component={SettingsPage}>Settings</NavLink>
      </div>
    );
}
//<NavLink  path='/home' component={Homepage}>Home</NavLink>