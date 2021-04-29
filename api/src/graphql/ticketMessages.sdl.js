export const schema = gql`
  type TicketMessage {
    id: Int!
    message: String!
    ticket: Ticket!
    taskId: String!
    employee: Employee
    employeeId: String
    contact: Contact
    contactId: String
    createdAt: DateTime!
  }

  type Query {
    ticketMessages: [TicketMessage!]!
    ticketMessage(id: Int!): TicketMessage
  }

  input CreateTicketMessageInput {
    message: String!
    taskId: String!
    employeeId: String
    contactId: String
  }

  input UpdateTicketMessageInput {
    message: String
    taskId: String
    employeeId: String
    contactId: String
  }

  type Mutation {
    createTicketMessage(input: CreateTicketMessageInput!): TicketMessage!
    updateTicketMessage(
      id: Int!
      input: UpdateTicketMessageInput!
    ): TicketMessage!
    deleteTicketMessage(id: Int!): TicketMessage!
  }
`
