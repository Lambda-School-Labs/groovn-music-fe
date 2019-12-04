import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <input type="text" name="search" placeholder="search" />
      <div className="navLinks">
        <NavLink className="navLink" to="/auth/spotify/callback/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/auth/spotify/callback/playlist-page">
          Playlist
        </NavLink>
        <NavLink className="navLink" to="/auth/spotify/callback/discover-page">
          Discover
        </NavLink>
        <NavLink className="navLink" to="/auth/spotify/callback/player-page">
          Player
        </NavLink>
        <NavLink className="navLink" to="/auth/spotify/callback/settings-page">
          Settings
        </NavLink>
      </div>
    </div>
  );
}
