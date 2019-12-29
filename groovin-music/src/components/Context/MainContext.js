import React, { useState } from 'react';

const MainContext = React.createContext({
  currentPlaylist: [],
  currentTrackIndex: 0,
});

const MainContextProvider = props => {
  const testMethod = () => {};
  const [state, setState] = useState({
    currentPlaylist: [],
    currentTrackIndex: 0,
  });
  console.log(state);

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
