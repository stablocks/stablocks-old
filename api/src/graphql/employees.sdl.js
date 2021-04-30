export const schema = gql`
  type Employee {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    title: String
    organization: Organization!
    organizationId: String!
    organizationRoles: [OrganizationRole]!
    department: Department
    departmentId: Int
    supervisorId: String
    supervisor: Employee
    employees: [Employee]!
    employeePay: EmployeePay
    tickets: [Ticket]!
    ticketMessage: [TicketMessage]!
    tasks: [Task]!
    taskMessages: [TaskMessage]!
    contacts: [Contact]!
    contactNotes: [ContactNote]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum OrganizationRole {
    admin
    manager
    hr
    marketing
    sales
  }

  type Query {
    employees: [Employee!]!
    employee(id: String!): Employee
  }

  input CreateEmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
    title: String
    organizationId: String!
    organizationRoles: [OrganizationRole]!
    departmentId: Int
    supervisorId: String
  }

  input UpdateEmployeeInput {
    firstName: String
    lastName: String
    email: String
    title: String
    organizationId: String
    organizationRoles: [OrganizationRole]!
    departmentId: Int
    supervisorId: String
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee!
    updateEmployee(id: String!, input: UpdateEmployeeInput!): Employee!
    deleteEmployee(id: String!): Employee!
  }
`
