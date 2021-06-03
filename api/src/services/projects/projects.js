import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

const user = context.currentUser
const orgId = user?.organizationId

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

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
