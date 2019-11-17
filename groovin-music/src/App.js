import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/landingPage.js';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage}></Route>
    </div>
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

export default App;
