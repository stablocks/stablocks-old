export const schema = gql`
  type EmployeePay {
    id: String!
    amount: Int!
    type: EmployeePayType!
    employee: Employee!
    employeeId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum EmployeePayType {
    salary
    hourly
    contract
  }

  type Query {
    employeePays: [EmployeePay!]!
    employeePay(id: String!): EmployeePay
  }

  input CreateEmployeePayInput {
    amount: Int!
    type: EmployeePayType!
    employeeId: String!
  }

  input UpdateEmployeePayInput {
    amount: Int
    type: EmployeePayType
    employeeId: String
  }

  type Mutation {
    createEmployeePay(input: CreateEmployeePayInput!): EmployeePay!
    updateEmployeePay(id: String!, input: UpdateEmployeePayInput!): EmployeePay!
    deleteEmployeePay(id: String!): EmployeePay!
  }
`
