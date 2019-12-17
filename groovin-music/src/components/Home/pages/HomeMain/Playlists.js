import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';

import './HomeMain.css';

const PLAYLIST_QUERY = gql`
  query Playlists {
    getPlaylists {
      id
      name
    }
  }
`;

const PlaylistList = () => {
  const { loading, error, data } = useQuery(PLAYLIST_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  let playlists = data.getPlaylists.map((playlist, index) => {
    if(index < 4) {
      return (
        <div className="homepage-item box" key={playlist.id}>
          <h3>{playlist.name}</h3>
        </div>
      )
    }
  })

  return playlists;
}

export default function Playlists() {
  return (
    <div>
      <h2>Playlists</h2>
      <div className="homepage-item-container">
        <PlaylistList />
      </div>
      <NavLink className="navLink" to="/discover-page">
        See All
      </NavLink>
    </div>
  );
}
