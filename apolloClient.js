import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql' }),
});




// MyComponent is a "presentational" or apollo-unaware component,
// It could be a simple React class:
class MyComponent extends Component {
  render() {
    return <div>Hello, <h4>you dont have a word here!</h4></div>;
  }
}

// Initialize GraphQL queries or mutations with the `gql` tag
const MyQuery = gql`query { hello }`;
//const MyMutation = gql`mutation MyMutation { addTodo(text: "Test 123") { id } }`;

// We then can use `graphql` to pass the query results returned by MyQuery
// to MyComponent as a prop (and update them as the results change)
const MyComponentWithData = graphql(MyQuery)(MyComponent);

// Or, we can bind the execution of MyMutation to a prop
//const MyComponentWithMutation = graphql(MyMutation)(MyComponent);



render(
  <ApolloProvider client={client}>
    <MyComponentWithData />
  </ApolloProvider>,
  document.getElementById('container')
)
