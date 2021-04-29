export const schema = gql`
  type ApplicationAnswer {
    id: String!
    answer: String!
    application: Application!
    applicationId: String!
    field: ApplicationField!
    fieldId: String!
  }

  type Query {
    applicationAnswers: [ApplicationAnswer!]!
    applicationAnswer(id: String!): ApplicationAnswer
  }

  input CreateApplicationAnswerInput {
    answer: String!
    applicationId: String!
    fieldId: String!
  }

  input UpdateApplicationAnswerInput {
    answer: String
    applicationId: String
    fieldId: String
  }

  type Mutation {
    createApplicationAnswer(
      input: CreateApplicationAnswerInput!
    ): ApplicationAnswer!
    updateApplicationAnswer(
      id: String!
      input: UpdateApplicationAnswerInput!
    ): ApplicationAnswer!
    deleteApplicationAnswer(id: String!): ApplicationAnswer!
  }
`
