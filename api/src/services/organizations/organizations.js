import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const organizations = () => {
  return db.organization.findMany()
}

export const organization = ({ id }) => {
  return db.organization.findUnique({
    where: { id },
  })
}

export const createOrganization = ({ input }) => {
  return db.organization.create({
    data: input,
  })
}

export const updateOrganization = ({ id, input }) => {
  return db.organization.update({
    data: input,
    where: { id },
  })
}

export const deleteOrganization = ({ id }) => {
  return db.organization.delete({
    where: { id },
  })
}

export const Organization = {
  jobs: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).jobs(),
  applicationFields: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).applicationFields(),
  employees: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).employees(),
  contacts: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).contacts(),
}
