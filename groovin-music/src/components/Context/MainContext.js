import React, { useState } from 'react';

const MainContext = React.createContext({
  currentPlaylist: [],
  currentTrackIndex: 0,
});

const MainContextProvider = props => {
  const [state, setState] = useState({
    currentPlaylist: [
      '0uuH3Htpahzscc1YSG833Z',
      '1nnUrCxOSuGhfR0elOI2ZQ',
      '5DjNBCWKdD2y8zyIxmKbbl',
      '0vHhhXkGGV2zF1NsN2EfIr',
      '3tK7XzkTAXZTAsXzodsBYN',
      '2IcjuFPUZISzX2LLhKZJN0',
      '3B1wNOKJcRPNSZwqp8JkFj',
      '5NhqdHEGfM78WWnJARI0iM',
      '4MUF5hjHDYbJF2YtKFp0MI',
      '35cOyocq8Gb6UcT0NWeTwn',
      '3CZmkivge9jnZzWxjm757B',
      '5VfMwt9My7JDyfbxilXjkw',
      '3j8FPquKEOygdUMLLs1Pxr',
      '1CKqhFUeQBruo6X8uCFBiZ',
      '4ZD1VFoJ9LyV65KhPO9TZ5',
      '6ghs7wcpS23FOsDpR8D2MW',
      '6e8Voz3K2vcOsydNtxbwaQ',
    ],
    currentTrackIndex: 0,
  });

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
