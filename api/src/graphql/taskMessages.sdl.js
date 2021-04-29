export const schema = gql`
  type TaskMessage {
    id: Int!
    message: String!
    task: Task!
    taskId: String!
    employee: Employee
    employeeId: String
    createdAt: DateTime!
  }

  type Query {
    taskMessages: [TaskMessage!]!
    taskMessage(id: Int!): TaskMessage
  }

  input CreateTaskMessageInput {
    message: String!
    taskId: String!
    employeeId: String
  }

  input UpdateTaskMessageInput {
    message: String
    taskId: String
    employeeId: String
  }

  type Mutation {
    createTaskMessage(input: CreateTaskMessageInput!): TaskMessage!
    updateTaskMessage(id: Int!, input: UpdateTaskMessageInput!): TaskMessage!
    deleteTaskMessage(id: Int!): TaskMessage!
  }
`
