export const standard = defineScenario({
  ticket: {
    one: {
      title: 'String',
      status: 'open',
      updatedAt: '2021-04-29T23:47:40Z',
      assigned: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:47:40Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String9751504',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:47:41Z',
            },
          },
        },
      },
    },

    two: {
      title: 'String',
      status: 'open',
      updatedAt: '2021-04-29T23:47:41Z',
      assigned: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:47:41Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String431748',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:47:41Z',
            },
          },
        },
      },
    },
  },
})
