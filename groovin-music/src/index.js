import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { gql } from 'apollo-boost'; //or you can use `import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// import { ApolloProvider } from '@apollo/react-hooks';
// import Homepage from './Homepage';

// const client = new ApolloClient({ // client ready to fetch data
//   uri: 'http://localhost:4000/graphql',
// });

import App from './App.js';
import './index.css';
import 'bulma/css/bulma.css'


const HELLO_QUERY = gql`
  query {
    hello {
      world
    }
  }
`;

const Hello = () => {
  console.log('here');
  const { loading, data } = useQuery(HELLO_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading...</div>;

  const { world } = data.hello;
  return <div>{world}</div>;
};

// const App = () => (
//   <ApolloProvider client={client}>
//       <div>
//           <h2>Connected FE to BE</h2>
//            <Homepage />
//           {/* <Hello></Hello> */}
//       </div>
//   </ApolloProvider>

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
