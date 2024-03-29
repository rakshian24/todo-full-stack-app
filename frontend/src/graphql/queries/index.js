import gql from "graphql-tag";

export const GET_ME = gql`
  query {
    me {
      id
      username
      email
      todos {
        id
        title
        description
        isCompleted
        ownerId
      }
    }
  }
`;
