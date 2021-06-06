export const schema = gql`
  type Query {
    organizationProvider: Organization
    publicOrganizationProvider(slug: String!): Organization
  }
`
