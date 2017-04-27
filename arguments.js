var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  rollDice: function ({numDice, numSides}) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

// Below is client side code to call above api.

// var dice = 3;
// var sides = 6;
// var xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open("POST", "/graphql");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Accept", "application/json");
// xhr.onload = function () {
//   console.log('data returned:', xhr.response);
// }
// var query = `query RollDice($dice: Int!, $sides: Int) {
//   rollDice(numDice: $dice, numSides: $sides)
// }`;
// xhr.send(JSON.stringify({
//   query: query,
//   variables: { dice: dice, sides: sides },
// }));
