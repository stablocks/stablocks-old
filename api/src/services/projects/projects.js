import { db } from 'src/lib/db'

export const projects = () => {
  return db.project.findMany()
}

export const project = ({ id }) => {
  return db.project.findUnique({
    where: { id },
  })
}

export const createProject = ({ input }) => {
  return db.project.create({
    data: input,
  })
}

export const updateProject = ({ id, input }) => {
  return db.project.update({
    data: input,
    where: { id },
  })
}

export const deleteProject = ({ id }) => {
  return db.project.delete({
    where: { id },
  })
}

export const Project = {
  tasks: (_obj, { root }) =>
    db.project.findUnique({ where: { id: root.id } }).tasks(),
}
