export const schema = gql`
  type Department {
    id: Int!
    name: String!
    employees: [Employee]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    departments: [Department!]!
    department(id: Int!): Department
  }

  input CreateDepartmentInput {
    name: String!
  }

  input UpdateDepartmentInput {
    name: String
  }

  type Mutation {
    createDepartment(input: CreateDepartmentInput!): Department!
    updateDepartment(id: Int!, input: UpdateDepartmentInput!): Department!
    deleteDepartment(id: Int!): Department!
  }
`
