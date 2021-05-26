import { db } from 'src/lib/db'

export const employees = async () => {
  const user = context.currentUser
  const id = user?.organizationId

  if (!user || !id) return []

  return db.employee.findMany({
    where: {
      organizationId: user.organizationId,
    },
  })
}

export const employee = ({ id }) => {
  return db.employee.findUnique({
    where: { id },
  })
}

export const createEmployee = ({ input }) => {
  return db.employee.create({
    data: input,
  })
}

export const updateEmployee = ({ id, input }) => {
  return db.employee.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployee = ({ id }) => {
  return db.employee.delete({
    where: { id },
  })
}

export const Employee = {
  organization: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).organization(),
  department: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).department(),
  supervisor: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).supervisor(),
  employees: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).employees(),
  access: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).access(),
  employeePay: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).employeePay(),
  onboarding: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).onboarding(),
  onboardingTasks: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).onboardingTasks(),
  tickets: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).tickets(),
  ticketMessage: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).ticketMessage(),
  tasks: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).tasks(),
  taskMessages: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).taskMessages(),
  contacts: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).contacts(),
  contactNotes: (_obj, { root }) =>
    db.employee.findUnique({ where: { id: root.id } }).contactNotes(),
}
