import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';
import './App.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { MusicPlayerProvider } from './components/MusicPlayer/MusicPlayerContext';

import { MainContextProvider } from './components/Context/MainContext';

import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

const USER_QUERY = gql`
  query currentUser {
    currentUser {
      displayName
    }
  }
`;

const User = () => {
  console.log('here');
  const { loading, error, data } = useQuery(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  const { displayName } = data.currentUser;

  return <div>{displayName}</div>;
};

const App = () => {
  return (
    <MainContextProvider>
      <div className="App">
        <Route to exact path="/landing-page" component={LandingPage} />
        <Route exact to="/protected" component={PrivateRoute} />
      </div>
    </MainContextProvider>
  );
};

export default App;

//      <Route path="/" component={Homepage} />
