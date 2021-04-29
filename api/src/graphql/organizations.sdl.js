export const schema = gql`
  type Organization {
    id: String!
    name: String!
    slug: String!
    stripeId: String!
    email: Boolean!
    communications: Boolean!
    payroll: Boolean!
    hr: Boolean!
    accounting: Boolean!
    recruiting: Boolean!
    crm: Boolean!
    marketing: Boolean!
    projectManagement: Boolean!
    helpdesk: Boolean!
    taskTracking: Boolean!
    jobs: [Job]!
    applicationFields: [ApplicationField]!
    employees: [Employee]!
    contacts: [Contact]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    organizations: [Organization!]!
    organization(id: String!): Organization
  }

  input CreateOrganizationInput {
    name: String!
    slug: String!
    stripeId: String!
    email: Boolean!
    communications: Boolean!
    payroll: Boolean!
    hr: Boolean!
    accounting: Boolean!
    recruiting: Boolean!
    crm: Boolean!
    marketing: Boolean!
    projectManagement: Boolean!
    helpdesk: Boolean!
    taskTracking: Boolean!
  }

  input UpdateOrganizationInput {
    name: String
    slug: String
    stripeId: String
    email: Boolean
    communications: Boolean
    payroll: Boolean
    hr: Boolean
    accounting: Boolean
    recruiting: Boolean
    crm: Boolean
    marketing: Boolean
    projectManagement: Boolean
    helpdesk: Boolean
    taskTracking: Boolean
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
    updateOrganization(
      id: String!
      input: UpdateOrganizationInput!
    ): Organization!
    deleteOrganization(id: String!): Organization!
  }
`
