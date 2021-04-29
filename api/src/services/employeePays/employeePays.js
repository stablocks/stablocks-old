import { db } from 'src/lib/db'

export const employeePays = () => {
  return db.employeePay.findMany()
}

export const employeePay = ({ id }) => {
  return db.employeePay.findUnique({
    where: { id },
  })
}

export const createEmployeePay = ({ input }) => {
  return db.employeePay.create({
    data: input,
  })
}

export const updateEmployeePay = ({ id, input }) => {
  return db.employeePay.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployeePay = ({ id }) => {
  return db.employeePay.delete({
    where: { id },
  })
}

export const EmployeePay = {
  employee: (_obj, { root }) =>
    db.employeePay.findUnique({ where: { id: root.id } }).employee(),
}
