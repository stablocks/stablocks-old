export const schema = gql`
  type Onboarding {
    id: String!
    employee: Employee!
    employeeId: String!
    tasks: [OnboardingTask]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    onboardings: [Onboarding!]!
    onboarding(id: String!): Onboarding
  }

  input CreateOnboardingInput {
    employeeId: String!
  }

  input UpdateOnboardingInput {
    employeeId: String
  }

  type Mutation {
    createOnboarding(input: CreateOnboardingInput!): Onboarding!
    updateOnboarding(id: String!, input: UpdateOnboardingInput!): Onboarding!
    deleteOnboarding(id: String!): Onboarding!
  }
`
