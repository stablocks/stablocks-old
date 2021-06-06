import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const organizationProvider = () => {
  const user = context.currentUser
  const id = user?.organizationId

  if (!user || !id) return null

  return db.organization.findUnique({
    where: { id },
  })
}

export const publicOrganizationProvider = ({ slug }) => {
  return db.organization.findUnique({
    where: { slug: slug },
  })
}
