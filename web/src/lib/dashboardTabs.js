import { routes } from '@redwoodjs/router'

export const organizationTabs = [
  { name: 'Organization', to: routes.organization() },
  { name: 'Employees', to: routes.employees() },
  { name: 'Departments', to: routes.departments() },
  { name: 'Settings', to: routes.settings() },
]

export const contactsTabs = [
  { name: 'Contacts', to: routes.contacts() },
  { name: 'Companies', to: routes.companies() },
]

export const recruitTabs = [
  { name: 'Recruit', to: routes.recruit() },
  { name: 'Jobs', to: routes.jobs() },
  { name: 'Applications', to: routes.applications() },
]

export const helpdeskTabs = [
  { name: 'Helpdesk', to: routes.helpdesk() },
  { name: 'Messages', to: routes.messages() },
  { name: 'Tickets', to: routes.tickets() },
  { name: 'Articles', to: routes.articles() },
  { name: 'Categories', to: routes.articleCategories() },
]

export const projectsTabs = [
  { name: 'Projects', to: routes.projects() },
  { name: 'Tasks', to: routes.tasks() },
]

export const profileTabs = [
  { name: 'Profile', to: routes.profile() },
  { name: 'Settings', to: routes.userSettings() },
]
