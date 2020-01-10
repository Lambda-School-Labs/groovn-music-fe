import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MainContext } from '../../../Context/MainContext';
import Playlist from '../PlaylistPage/Playlist.js';

const CREATE_RECOMMENDED_PLAYLIST = gql`
  mutation CreateRecommendedPlaylist($name: String!, $description: String) {
    createRecommendedPlaylist(name: $name, description: $description) {
      tracks
    }
  }
`;

//query to get current user's saved tracks

const GET_SAVED_TRACKS = gql`
  query getLikedTracks {
    getLikedTracks {
      id
      name
    }
  }
`;

const GET_TRACK_INFO = gql`
  query getTracksInfo($tracks: [String]!) {
    getTracksInfo(tracks: $tracks) {
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



//component
const RecommendedPlaylist = props => {
  const [state, setState] = React.useContext(MainContext);
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const [recommendedPlaylist, { loading, data }] = useMutation(
    CREATE_RECOMMENDED_PLAYLIST
  );

  const handleNameInput = event => {
    setInput({ name: event.target.value, description: input.description });
  };

  const handleDescInput = event => {
    setInput({ name: input.name, description: event.target.value });
  };

  const createPlaylist = async () => {

    const playlist = await recommendedPlaylist({
      variables: { name: input.name, description: input.description },
    });

    setInput({
      name: '',
      description: '',
    });
    if(playlist) {
      setState({
        ...state,
        currentPlaylist: playlist.data.createRecommendedPlaylist.tracks,
      });
    } else {
      console.log("error")
    }
  };

  
  const queryPlaylist = useQuery(GET_SAVED_TRACKS, { notifyOnNetworkStatusChange: true })
  

  const getCurrentUserRecommendations = (e) => {
    e.preventDefault();
    // 1. perform query
    console.log("hit!")
    if(queryPlaylist.loading) {
      return (
        <div>
          Loading............
        </div>
      )
    }
    if(queryPlaylist.data) {
      // 2. set results of query on context via setState

      setState({currentPlaylist: queryPlaylist.data.getLikedTracks});
      console.log(state);
      
      // 3. create recommended playlist
      const newPlaylist = createPlaylist();
      console.log(newPlaylist);
    }
    else {
      return <div>{queryPlaylist.error}</div>
    }




  }
  //Hook set up for input
  
  if (loading) {
    return <div style={{ color: 'white', fontSize: 24 }}>{loading}</div>;
  } else if (data) {
    return <Redirect to="/player-page" />;
  } else {
    return (
      <div>
        <form onSubmit={getCurrentUserRecommendations}>
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
      </div>
    );
  }
};

export default RecommendedPlaylist;
