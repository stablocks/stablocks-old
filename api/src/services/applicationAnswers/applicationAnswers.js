import { db } from 'src/lib/db'

export const applicationAnswers = () => {
  return db.applicationAnswer.findMany()
}

export const applicationAnswer = ({ id }) => {
  return db.applicationAnswer.findUnique({
    where: { id },
  })
}

export const createApplicationAnswer = ({ input }) => {
  return db.applicationAnswer.create({
    data: input,
  })
}

export const updateApplicationAnswer = ({ id, input }) => {
  return db.applicationAnswer.update({
    data: input,
    where: { id },
  })
}

export const deleteApplicationAnswer = ({ id }) => {
  return db.applicationAnswer.delete({
    where: { id },
  })
}

export const ApplicationAnswer = {
  application: (_obj, { root }) =>
    db.applicationAnswer.findUnique({ where: { id: root.id } }).application(),
  field: (_obj, { root }) =>
    db.applicationAnswer.findUnique({ where: { id: root.id } }).field(),
}
