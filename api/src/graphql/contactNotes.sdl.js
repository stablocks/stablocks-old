export const schema = gql`
  type ContactNote {
    id: Int!
    message: String!
    contact: Contact!
    contactId: String!
    employee: Employee
    employeeId: String
    createdAt: DateTime!
  }

  type Query {
    contactNotes: [ContactNote!]!
    contactNote(id: Int!): ContactNote
  }

  input CreateContactNoteInput {
    message: String!
    contactId: String!
    employeeId: String
  }

  input UpdateContactNoteInput {
    message: String
    contactId: String
    employeeId: String
  }

  type Mutation {
    createContactNote(input: CreateContactNoteInput!): ContactNote!
    updateContactNote(id: Int!, input: UpdateContactNoteInput!): ContactNote!
    deleteContactNote(id: Int!): ContactNote!
  }
`
