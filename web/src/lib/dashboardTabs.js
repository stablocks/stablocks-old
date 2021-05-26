import { routes } from '@redwoodjs/router'

export const organizationTabs = [
  { name: 'Recruit', to: routes.recruit() },
  { name: 'Jobs', to: routes.jobs() },
  { name: 'Applications', to: routes.applications() },
]

export const recruitTabs = [
  { name: 'Recruit', to: routes.recruit() },
  { name: 'Jobs', to: routes.jobs() },
  { name: 'Applications', to: routes.applications() },
]

export const helpdeskTabs = [
  { name: 'Helpdesk', to: routes.helpdesk() },
  { name: 'Tickets', to: routes.tickets() },
]

export const projectsTabs = [
  { name: 'Projects', to: routes.projects() },
  { name: 'Tasks', to: routes.tasks() },
]
