import React, { useState } from 'react';
import './PlayerPage.css';

import SpotifyPlayer from 'react-spotify-player';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const CREATE_RECOMMENDED_PLAYLIST = gql`
  mutation CreateRecommendedPlaylist($name: String!, $description: String) {
    createRecommendedPlaylist(name: $name, description: $description) {
      tracks
    }
  }
`;

export default function PlayerPage() {
  return (
    <div className="playerPage-container">
      <RecommendedPlayist />
    </div>
  );
}

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

function Player(props) {
  return (
    <SpotifyPlayer
      uri={`spotify:track:${props.currentTrack}`}
      size={size}
      view={view}
      theme={theme}
    />
  );
}

const RecommendedPlayist = () => {
  console.log('here in the reced playlist function');
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const [recommendedPlayist, { loading, data }] = useMutation(
    CREATE_RECOMMENDED_PLAYLIST
  );

  const handleNameInput = event => {
    setInput({ name: event.target.value, description: input.description });
  };

  const handleDescInput = event => {
    setInput({ name: input.name, description: event.target.value });
  };

  const createPlaylist = async e => {
    e.preventDefault();

    const playlist = await recommendedPlayist({
      variables: { name: input.name, description: input.description },
    });

    setInput({
      name: '',
      description: '',
    });
    setTracks(playlist.data.createRecommendedPlaylist.tracks);
  };

  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    } else {
      setCurrentTrack(0);
    }
  };

  const previousTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    } else {
      setCurrentTrack(tracks.length - 1);
    }
  };

  if (loading) {
    return <div>{loading}</div>;
  } else {
    return (
      <div>
        <form onSubmit={createPlaylist}>
          <input
            type="text"
            placeholder="Playlist Name"
            name="name"
            value={input.name}
            onChange={handleNameInput}
          />
          <input
            type="text"
            placeholder="Playlist Description"
            name="description"
            value={input.description}
            onChange={handleDescInput}
          />
          <button type="submit"> Create Playlist </button>
        </form>
        <Player currentTrack={tracks[currentTrack]} />
        <button onClick={previousTrack}>Previous Track</button>
        <button onClick={nextTrack}>Next Track</button>
      </div>
    );
  }
};

const currentSong = {
  songTitle: 'Test-SongTitle',
  artistName: 'Test-ArtistName',
  albumName: 'Test-AblumName',
  songImg: 'https://i.redd.it/btchnm8ctq911.jpg',
};
