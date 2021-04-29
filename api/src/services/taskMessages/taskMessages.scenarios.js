export const standard = defineScenario({
  taskMessage: {
    one: {
      message: 'String',
      task: {
        create: {
          title: 'String',
          status: 'open',
          updatedAt: '2021-04-29T23:48:55Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String',
              organizationRoles: 'admin',
              updatedAt: '2021-04-29T23:48:55Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String8024501',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:48:55Z',
                },
              },
            },
          },
        },
      },
    },

    two: {
      message: 'String',
      task: {
        create: {
          title: 'String',
          status: 'open',
          updatedAt: '2021-04-29T23:48:55Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String',
              organizationRoles: 'admin',
              updatedAt: '2021-04-29T23:48:55Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String2946646',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:48:55Z',
                },
              },
            },
          },
        },
      },
    },
  },
})
