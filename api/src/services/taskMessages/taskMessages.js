import { db } from 'src/lib/db'

export const taskMessages = () => {
  return db.taskMessage.findMany()
}

export const taskMessage = ({ id }) => {
  return db.taskMessage.findUnique({
    where: { id },
  })
}

export const createTaskMessage = ({ input }) => {
  return db.taskMessage.create({
    data: input,
  })
}

export const updateTaskMessage = ({ id, input }) => {
  return db.taskMessage.update({
    data: input,
    where: { id },
  })
}

export const deleteTaskMessage = ({ id }) => {
  return db.taskMessage.delete({
    where: { id },
  })
}

export const TaskMessage = {
  task: (_obj, { root }) =>
    db.taskMessage.findUnique({ where: { id: root.id } }).task(),
  employee: (_obj, { root }) =>
    db.taskMessage.findUnique({ where: { id: root.id } }).employee(),
}
