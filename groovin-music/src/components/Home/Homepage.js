import React from 'react'

import RecentlyPlayed from './RecentlyPlayed'
import MixTapes from './MixTapes';
import FeaturedArtist from './FeaturedArtist';
import Playlists from './Playlists'
import Sidebar from './Sidebar';
import AlbumOfWeek from './AlbumOfWeek'

import './Homepage.css';


export default function Homepage() {
    return (
        <div>
            {/* add nav bar here */}
            
            <div className="homepage-container">
                <div className="homepage-sidebar">
                    <Sidebar />
                </div>

                <div className="homepage-main">
                    <AlbumOfWeek />
                    <RecentlyPlayed />
                    <MixTapes />
                    <FeaturedArtist />
                    <Playlists />
                </div>
            </div>

            {/* add footer here */}
        </div>
    )
}
