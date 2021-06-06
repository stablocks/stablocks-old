import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const tasks = () => {
  return db.task.findMany()
}

export const task = ({ id }) => {
  return db.task.findUnique({
    where: { id },
  })
}

export const createTask = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task = {
  assigned: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).assigned(),
  project: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).project(),
  messages: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).messages(),
}
