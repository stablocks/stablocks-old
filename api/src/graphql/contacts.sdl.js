export const schema = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
    email: String
    phone: Int
    company: Company
    companyId: String
    organization: Organization!
    organizationId: String!
    employee: Employee
    employeeId: String
    note: [ContactNote]!
    tickets: [Ticket]!
    ticketMessage: [TicketMessage]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: String!): Contact
  }

  input CreateContactInput {
    firstName: String
    lastName: String
    email: String
    phone: Int
    companyId: String
    organizationId: String!
    employeeId: String
  }

  input UpdateContactInput {
    firstName: String
    lastName: String
    email: String
    phone: Int
    companyId: String
    organizationId: String
    employeeId: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact!
    updateContact(id: String!, input: UpdateContactInput!): Contact!
    deleteContact(id: String!): Contact!
  }
`
