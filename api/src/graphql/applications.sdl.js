export const schema = gql`
  type Application {
    id: String!
    job: Job!
    jobId: String!
    firstName: String!
    lastName: String!
    employee: Employee!
    employeeId: String!
    answers: [ApplicationAnswer]!
    status: ApplicationStatus!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum ApplicationStatus {
    submitted
    reviewed
    offered
    archived
  }

  type Query {
    applications: [Application!]!
    application(id: String!): Application
  }

  input CreateApplicationInput {
    jobId: String!
    firstName: String!
    lastName: String!
    employeeId: String!
    status: ApplicationStatus!
  }

  input UpdateApplicationInput {
    jobId: String
    firstName: String
    lastName: String
    employeeId: String
    status: ApplicationStatus
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application!
    updateApplication(id: String!, input: UpdateApplicationInput!): Application!
    deleteApplication(id: String!): Application!
  }
`
