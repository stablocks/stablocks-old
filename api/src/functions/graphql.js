import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import { getAuthenticationContext } from '@redwoodjs/api/dist/auth'
import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'

export const handler = createGraphQLHandler({
  context: async ({ event, context }) => {
    const authContext = await getAuthenticationContext({ event, context })
    return authContext
  },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
