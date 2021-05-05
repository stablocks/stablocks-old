export const schema = gql`
  type Signup {
    organizationName: String!
    firstName: String!
    lastName: String!
    email: String!
  }

  input CreateSignupInput {
    organizationName: String!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createSignup(input: CreateSignupInput!): Organization!
  }
`
