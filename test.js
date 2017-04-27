var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Character {
    name: String
  }

  type Query {
    hero: Character
  }
`);



class Character {
  constructor() {
    this.name = 'Juliana Robert';
  }
}



var root = {
  hero: () => new Character()  
}

// type Character {
//   name: String
//   age: Int
//   friends: [Character]
//   homeWorld: Planet
//   species: Species
// }
//
// type Planet {
//   name: String
//   climate: String
// }
//
// type Species {
//   name: String
//   lifespan: Int
//   origin: Planet
// }



// ------------------------------------

// friends: [
//   {
//     name: 'Timmy Wowl',
//     age: 31,
//     friends: [
//       name: 'Jamy Fellow',
//       age: 32
//     ]
//   }
// ]
// homeWorld: {
//   name: 'Jupita',
//   climate: 'cold'
// }
// species: {
//   name: 'Ant',
//   lifespan: 7,
//   origin: {
//     name: 'Mars',
//     climate: 'hot'
//   }
// }

graphql(schema, '{ hero }', root).then((response) => {
  console.log(response);
});
