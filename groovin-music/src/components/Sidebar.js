import React from 'react';
import {NavLink} from 'react-router-dom'
import PlaylistPage from './playlist/PLaylistPage.js'
import './Sidebar.css';

export default function Sidebar() {
    return (
      <div className="sidebar">
        <input type="text" name="search" placeholder="search" />
        
        <h2>Home</h2>
        <h2>Playlist</h2>
        <h2>Discover</h2>
        <h2>Player</h2>
        <h2>Settings</h2>
      </div>
    );
}
