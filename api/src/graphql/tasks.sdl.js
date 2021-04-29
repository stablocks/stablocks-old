export const schema = gql`
  type Task {
    id: String!
    title: String!
    description: String
    status: Status!
    assigned: Employee!
    assignedId: String!
    project: Project
    projectId: String
    messages: [TaskMessage]!
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
    tasks: [Task!]!
    task(id: String!): Task
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: Status!
    assignedId: String!
    projectId: String
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: Status
    assignedId: String
    projectId: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: String!, input: UpdateTaskInput!): Task!
    deleteTask(id: String!): Task!
  }
`
