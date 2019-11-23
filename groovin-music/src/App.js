import React from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import LandingPage from './components/landingPage/landingPage.js';
import Homepage from './components/Home/Homepage.js';
import PlaylistPage from './components/pages/PlaylistPage/PlaylistPage';
import DiscoverPage from './components/pages/DiscoverPage/DiscoverPage';
import PlayerPage from './components/pages/PlayerPage/PlayerPage';
import SettingsPage from './components/pages/SettingsPage/SettingsPage';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/playlist-page" component={PlaylistPage} />
        <Route exact path="/discover-page" component={DiscoverPage} />
        <Route exact path="/player-page" component={PlayerPage} />
        <Route exact path="/settings-page" component={SettingsPage} />
      </div>
    </ApolloProvider>
  );
}

export default App;

// Below is a way to make the search bar functional

// handleChange(e) => {
//   let X = [];
//   let newX = [];
//   if (e.target.value !== "") {
//     currentX = this.props.items;
//     newX = currentX.filter(item => {
//       const Y = item.toLowerCase();
//       const filter = e.target.value.toLowerCase();
//       return Y.includes(filter);
//     });
//   } else {
//     newX = this.props.items;
//     this.setState({
//       filtered: newX
//     });
//   }
// }

// Below will bind the "this" keyword to it.  Inside of our constructor, after the state, below will bind the method

// this.handleChange = this.handleChange.bind(this)

// Below is the last piece to make search bar functional
// <input
//   type="text"
//   className="input"
//   onChange={this.handleChange}
//   placeholder="Search ...."
// />
