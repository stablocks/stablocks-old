import { db } from 'src/lib/db'

export const applicationFields = () => {
  return db.applicationField.findMany()
}

export const applicationField = ({ id }) => {
  return db.applicationField.findUnique({
    where: { id },
  })
}

export const createApplicationField = ({ input }) => {
  return db.applicationField.create({
    data: input,
  })
}

export const updateApplicationField = ({ id, input }) => {
  return db.applicationField.update({
    data: input,
    where: { id },
  })
}

export const deleteApplicationField = ({ id }) => {
  return db.applicationField.delete({
    where: { id },
  })
}

export const ApplicationField = {
  organization: (_obj, { root }) =>
    db.applicationField.findUnique({ where: { id: root.id } }).organization(),
  jobs: (_obj, { root }) =>
    db.applicationField.findUnique({ where: { id: root.id } }).jobs(),
  answers: (_obj, { root }) =>
    db.applicationField.findUnique({ where: { id: root.id } }).answers(),
  fieldOrder: (_obj, { root }) =>
    db.applicationField.findUnique({ where: { id: root.id } }).fieldOrder(),
}
