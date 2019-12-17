
import React from 'react';
import './index.css';
//import App from './App';
// import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost'; //or you can use `import gql from 'graphql-tag';
import { render } from 'react-dom';
import { useQuery } from '@apollo/react-hooks';

import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({ // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});


// const Hello = () => {
//   const { loading, data } = useQuery(HELLO_QUERY, {
//     notifyOnNetworkStatusChange: true,
//   });

//   if (loading) return <div>Loading...</div>;

//   const { world } = data.hello;  
//     return (
//   <div>{ world }</div>
//   );
// };


const TRACK_QUERY = gql`
query GetTracksInfo($tracks: [String!]){
  
  getTracksInfo(tracks: $tracks){
    id
    name
    albumName
    albumCover
  }
}
  
  
`;

export function Track() {
  console.log('playing')
  
  const { loading, error,  data } = useQuery(TRACK_QUERY, {variables: {tracks:[ '4MUF5hjHDYbJF2YtKFp0MI',
  '6e8Voz3K2vcOsydNtxbwaQ',
  '4ZD1VFoJ9LyV65KhPO9TZ5',
  '35cOyocq8Gb6UcT0NWeTwn',
  '0uuH3Htpahzscc1YSG833Z',
  '5DjNBCWKdD2y8zyIxmKbbl'] }});
  

  if (loading) {
    return <div>Loading...</div>;
} else if (error) {
    return <div>{error.message}</div>;
}
  console.log(data)

  return (
    
    <div>
    <h1> Track </h1>
     <p>Name: {data}</p>
  
    </div>

  );

  }
// const Track = () => {
  
//   console.log('playing')
//   const { loading, data } = useQuery(TRACK_QUERY, {
//     notifyOnNetworkStatusChange: true,
//   });

//   if (loading) return <div>Loading...</div>;

//   const {name} = data.tracks.name;  
//     return (
//   <div>{name}</div>
//   );
// };

  const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>Connected FE to BE</h2>
            {/* <Hello></Hello> */}
            <Track></Track>
        </div>
    </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();