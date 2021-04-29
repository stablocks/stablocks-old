export const schema = gql`
  type Company {
    id: String!
    name: String!
    website: String
    phone: Int
    contacts: [Contact]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    companies: [Company!]!
    company(id: String!): Company
  }

  input CreateCompanyInput {
    name: String!
    website: String
    phone: Int
  }

  input UpdateCompanyInput {
    name: String
    website: String
    phone: Int
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
    deleteCompany(id: String!): Company!
  }
`
