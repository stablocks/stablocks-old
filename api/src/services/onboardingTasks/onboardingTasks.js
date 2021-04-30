import { db } from 'src/lib/db'

export const onboardingTasks = () => {
  return db.onboardingTask.findMany()
}

export const onboardingTask = ({ id }) => {
  return db.onboardingTask.findUnique({
    where: { id },
  })
}

export const createOnboardingTask = ({ input }) => {
  return db.onboardingTask.create({
    data: input,
  })
}

export const updateOnboardingTask = ({ id, input }) => {
  return db.onboardingTask.update({
    data: input,
    where: { id },
  })
}

export const deleteOnboardingTask = ({ id }) => {
  return db.onboardingTask.delete({
    where: { id },
  })
}

export const OnboardingTask = {
  assigned: (_obj, { root }) =>
    db.onboardingTask.findUnique({ where: { id: root.id } }).assigned(),
  onboarding: (_obj, { root }) =>
    db.onboardingTask.findUnique({ where: { id: root.id } }).onboarding(),
}
