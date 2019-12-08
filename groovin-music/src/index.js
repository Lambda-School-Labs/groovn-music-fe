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
});

const USER_QUERY = gql`
  query currentUser {
    currentuser {
      user
    }
  }
`;

client
  .query({
    query: gql`
      query currentuser {
        user {
          id
        }
      }
    `,
  })
  .then(result => console.log(`${result} == RESULT`));

const User = () => {
  console.log('here');
  const { loading, data } = useQuery(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading...</div>;

  const { world } = data.user;
  return <div>{world}</div>;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
