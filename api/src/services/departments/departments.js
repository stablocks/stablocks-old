import { db } from 'src/lib/db'

export const departments = () => {
  return db.department.findMany()
}

export const department = ({ id }) => {
  return db.department.findUnique({
    where: { id },
  })
}

export const createDepartment = ({ input }) => {
  return db.department.create({
    data: input,
  })
}

export const updateDepartment = ({ id, input }) => {
  return db.department.update({
    data: input,
    where: { id },
  })
}

export const deleteDepartment = ({ id }) => {
  return db.department.delete({
    where: { id },
  })
}

export const Department = {
  employees: (_obj, { root }) =>
    db.department.findUnique({ where: { id: root.id } }).employees(),
}
