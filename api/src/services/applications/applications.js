import { db } from 'src/lib/db'

export const applications = () => {
  return db.application.findMany()
}

export const application = ({ id }) => {
  return db.application.findUnique({
    where: { id },
  })
}

export const createApplication = ({ input }) => {
  return db.application.create({
    data: input,
  })
}

export const updateApplication = ({ id, input }) => {
  return db.application.update({
    data: input,
    where: { id },
  })
}

export const deleteApplication = ({ id }) => {
  return db.application.delete({
    where: { id },
  })
}

export const Application = {
  job: (_obj, { root }) =>
    db.application.findUnique({ where: { id: root.id } }).job(),
  employee: (_obj, { root }) =>
    db.application.findUnique({ where: { id: root.id } }).employee(),
  answers: (_obj, { root }) =>
    db.application.findUnique({ where: { id: root.id } }).answers(),
}
