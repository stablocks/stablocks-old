export const schema = gql`
  type ApplicationField {
    id: String!
    title: String!
    description: String
    type: FieldType!
    organization: Organization!
    organizationId: String!
    jobs: [Job]!
    answers: [ApplicationAnswer]!
    fieldOrder: [FieldOrder]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum FieldType {
    input
    textarea
    select
    radio
    checkbox
  }

  type Query {
    applicationFields: [ApplicationField!]!
    applicationField(id: String!): ApplicationField
  }

  input CreateApplicationFieldInput {
    title: String!
    description: String
    type: FieldType!
    organizationId: String!
  }

  input UpdateApplicationFieldInput {
    title: String
    description: String
    type: FieldType
    organizationId: String
  }

  type Mutation {
    createApplicationField(
      input: CreateApplicationFieldInput!
    ): ApplicationField!
    updateApplicationField(
      id: String!
      input: UpdateApplicationFieldInput!
    ): ApplicationField!
    deleteApplicationField(id: String!): ApplicationField!
  }
`
