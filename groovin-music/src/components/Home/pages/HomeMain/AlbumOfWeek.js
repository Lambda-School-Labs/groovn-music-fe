import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import './HomeMain.css';

const RANDOM_TRACK_QUERY = gql`
    query tracks {
        getLikedTracks {
            id
            albumCover
        }
    }
`;

const RandomTrack = () => {
    const { loading, error, data } = useQuery(RANDOM_TRACK_QUERY, {
        notifyOnNetworkStatusChange: true,
    });

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error.message}</div>;
    }

    function randomize() {
        let num = Math.floor(data.getLikedTracks.length * Math.random());

        if(num < data.getLikedTracks.length) {
            return num;
        } else {
            return 0;
        }
    }

    const divStyle = {
        background: `url(${data.getLikedTracks[randomize()].albumCover})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }

    return (
    <div className="album-background" style={divStyle}>
        <h2>Song Name</h2>
        <h3>Album Name</h3>
        <h3>Artist Name</h3>
    </div>
    )
}

function AlbumOfWeek() {
    return (
        <div className="album-of-week">
            <RandomTrack>
                <div>
                    <h2>Song Name</h2>
                    <h3>Album Name</h3>
                    <h3>Artist Name</h3>
                </div>
            </RandomTrack>
        </div>
    )
}

export default AlbumOfWeek;