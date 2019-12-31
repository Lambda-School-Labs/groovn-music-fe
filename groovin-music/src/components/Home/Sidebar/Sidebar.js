import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <input type="text" name="search" placeholder="search" />
      <div className="navLinks">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/player-page">
          Player
        </NavLink>
        <NavLink className="navLink" to="/recommended-playlist">
          Recommended Playlist
        </NavLink>
      </div>
    </div>
  );
}
