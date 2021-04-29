export const schema = gql`
  type Ticket {
    id: String!
    title: String!
    description: String
    contact: Contact
    contactId: String
    status: Status!
    assigned: Employee!
    assignedId: String!
    messages: [TicketMessage]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum Status {
    open
    pending
    closed
    archived
  }

  type Query {
    tickets: [Ticket!]!
    ticket(id: String!): Ticket
  }

  input CreateTicketInput {
    title: String!
    description: String
    contactId: String
    status: Status!
    assignedId: String!
  }

  input UpdateTicketInput {
    title: String
    description: String
    contactId: String
    status: Status
    assignedId: String
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket!
    updateTicket(id: String!, input: UpdateTicketInput!): Ticket!
    deleteTicket(id: String!): Ticket!
  }
`
