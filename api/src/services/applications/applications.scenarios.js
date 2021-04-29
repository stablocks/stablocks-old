export const standard = defineScenario({
  application: {
    one: {
      firstName: 'String',
      lastName: 'String',
      status: 'submitted',
      updatedAt: '2021-04-29T23:45:38Z',
      job: {
        create: {
          title: 'String',
          description: 'String',
          updatedAt: '2021-04-29T23:45:38Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String8608178',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:38Z',
            },
          },
        },
      },

      employee: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:45:38Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String294127',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:38Z',
            },
          },
        },
      },
    },

    two: {
      firstName: 'String',
      lastName: 'String',
      status: 'submitted',
      updatedAt: '2021-04-29T23:45:38Z',
      job: {
        create: {
          title: 'String',
          description: 'String',
          updatedAt: '2021-04-29T23:45:38Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String2428947',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:38Z',
            },
          },
        },
      },

      employee: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:45:38Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String4606249',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:38Z',
            },
          },
        },
      },
    },
  },
})
