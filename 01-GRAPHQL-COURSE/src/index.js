import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String]!
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Alex Marques',
      age: () => 31,
      average: () => 10.6,
      married: () => false,
      arrayString: () => ['a', 'b', 4],
      user: () => {
        return {
          id: 2,
          userName: () => 'alexmarques',
        };
      },
      users: () => {
        return [
          {
            id: 1,
            userName: () => 'alexmarques',
          },
          {
            id: 2,
            userName: () => 'alexmarques12',
          },
          {
            id: 3,
            userName: () => 'alexmarques1234',
          },
          {
            id: 4,
            userName: () => 'alexmarques12345',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
