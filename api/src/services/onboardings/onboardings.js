import { db } from 'src/lib/db'

export const onboardings = () => {
  return db.onboarding.findMany()
}

export const onboarding = ({ id }) => {
  return db.onboarding.findUnique({
    where: { id },
  })
}

export const createOnboarding = ({ input }) => {
  return db.onboarding.create({
    data: input,
  })
}

export const updateOnboarding = ({ id, input }) => {
  return db.onboarding.update({
    data: input,
    where: { id },
  })
}

export const deleteOnboarding = ({ id }) => {
  return db.onboarding.delete({
    where: { id },
  })
}

export const Onboarding = {
  employee: (_obj, { root }) =>
    db.onboarding.findUnique({ where: { id: root.id } }).employee(),
  tasks: (_obj, { root }) =>
    db.onboarding.findUnique({ where: { id: root.id } }).tasks(),
}
