import { db } from 'src/lib/db'
import { getCurrentUser } from 'src/lib/auth'
import { useAuth } from '@redwoodjs/auth'

export const organizations = () => {
  return db.organization.findMany()
}

export const organization = ({ id }) => {
  return db.organization.findUnique({
    where: { id },
  })
}

export const organizationProvider = () => {
  const user = context.currentUser

  if (!user) return null

  const id = user?.organizationId

  if (!id) return null

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
  employeeAccess: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).employeeAccess(),
  contacts: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).contacts(),
}
