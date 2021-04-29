export const schema = gql`
  type FieldOrder {
    id: Int!
    order: Int!
    job: Job!
    jobId: String!
    field: ApplicationField!
    fieldId: String!
  }

  type Query {
    fieldOrders: [FieldOrder!]!
    fieldOrder(id: Int!): FieldOrder
  }

  input CreateFieldOrderInput {
    order: Int!
    jobId: String!
    fieldId: String!
  }

  input UpdateFieldOrderInput {
    order: Int
    jobId: String
    fieldId: String
  }

  type Mutation {
    createFieldOrder(input: CreateFieldOrderInput!): FieldOrder!
    updateFieldOrder(id: Int!, input: UpdateFieldOrderInput!): FieldOrder!
    deleteFieldOrder(id: Int!): FieldOrder!
  }
`
