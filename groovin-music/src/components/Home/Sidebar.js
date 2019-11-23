import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <input type="text" name="search" placeholder="search" />
      <div className="navLinks">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/playlist-page">
          Playlist
        </NavLink>
        <NavLink className="navLink" to="/discover-page">
          Discover
        </NavLink>
        <NavLink className="navLink" to="/player-page">
          Player
        </NavLink>
        <NavLink className="navLink" to="/settings-page">
          Settings
        </NavLink>
      </div>
    </div>
  );
}
