import React from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import LandingPage from './components/landingPage/landingPage.js';
import Homepage from './components/Home/Homepage.js';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Route path="/" component={Homepage}></Route>
      </div>
    </ApolloProvider>
  );
}

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

export default App;
