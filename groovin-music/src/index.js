import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import App from './App.js';
import './index.css';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

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
  //const { displayName } = data.currentUser;

  return <div></div>;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <User />
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
