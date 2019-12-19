import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';

import './HomeMain.css';

const TRACK_QUERY = gql`
    query tracks {
        getLikedTracks {
            id
            name
            albumName
            albumCover
            artists {
                name
            }
        }
    }
`;

const LikedSongs = () => {
    const { loading, error, data } = useQuery(TRACK_QUERY, {
        notifyOnNetworkStatusChange: true,
    });

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error.message}</div>;
    }

    let songList = data.getLikedTracks.map((song, index) => {
        if(index < 4) {
            return (
                <div className="homepage-item" key={song.id}>
                    <img src={song.albumCover} atl={song.albumName} />
                    <h4>{song.name}</h4>
                    <h5>{song.artists[0].name}</h5>
                </div>
            );
        }
    })

    return songList;
};

export default function RecentlyPlayed() {
    return (
        <div>
            <h2>Liked Songs</h2>
            <div className="homepage-item-container">
                <LikedSongs />
            </div>
            <NavLink className="navLink" to="/playlist-page">
                See All
            </NavLink>
        </div>
    )
}
