export const schema = gql`
  type Job {
    id: String!
    title: String!
    description: String!
    fields: [ApplicationField]!
    applications: [Application]!
    fieldOrder: [FieldOrder]!
    organization: Organization!
    organizationId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    jobs: [Job!]!
    job(id: String!): Job
  }

  input CreateJobInput {
    title: String!
    description: String!
    organizationId: String!
  }

  input UpdateJobInput {
    title: String
    description: String
    organizationId: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job!
    updateJob(id: String!, input: UpdateJobInput!): Job!
    deleteJob(id: String!): Job!
  }
`
