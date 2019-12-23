import { useContext } from 'react';
import { MusicPlayerContext } from '../components/MusicPlayer/MusicPlayerContext.js';

const UseMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index]);
      state.audioPlayer.play();
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  function togglePlay() {
    console.log('clicked play');
    console.log(`Toggling Play to: ${!state.isPlaying}`);
    console.log(`current track index: ${state.currentTrackIndex}`);
    console.log(
      `current track index: ${state.tracks[state.currentTrackIndex].file}`
    );
    // Pause track logic
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    // Play previos track logic
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    // Play next track logic
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default UseMusicPlayer;

//state.currentTrackIndex !== null &&
// currentTrackName: state.tracks[state.currentTrackIndex].name
