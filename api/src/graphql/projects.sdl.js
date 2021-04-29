export const schema = gql`
  type Project {
    id: String!
    title: String!
    description: String
    tasks: [Task]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]!
    project(id: String!): Project
  }

  input CreateProjectInput {
    title: String!
    description: String
  }

  input UpdateProjectInput {
    title: String
    description: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: String!, input: UpdateProjectInput!): Project!
    deleteProject(id: String!): Project!
  }
`
