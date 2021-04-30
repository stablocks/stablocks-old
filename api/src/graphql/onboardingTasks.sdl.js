export const schema = gql`
  type OnboardingTask {
    id: String!
    title: String!
    description: String
    status: Status!
    assigned: Employee!
    assignedId: String!
    onboarding: Onboarding
    projectId: String
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
    onboardingTasks: [OnboardingTask!]!
    onboardingTask(id: String!): OnboardingTask
  }

  input CreateOnboardingTaskInput {
    title: String!
    description: String
    status: Status!
    assignedId: String!
    projectId: String
  }

  input UpdateOnboardingTaskInput {
    title: String
    description: String
    status: Status
    assignedId: String
    projectId: String
  }

  type Mutation {
    createOnboardingTask(input: CreateOnboardingTaskInput!): OnboardingTask!
    updateOnboardingTask(
      id: String!
      input: UpdateOnboardingTaskInput!
    ): OnboardingTask!
    deleteOnboardingTask(id: String!): OnboardingTask!
  }
`
