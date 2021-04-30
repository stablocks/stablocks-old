export const standard = defineScenario({
  taskMessage: {
    one: {
      message: 'String',
      task: {
        create: {
          title: 'String',
          status: 'open',
          updatedAt: '2021-04-30T23:37:37Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String2910997',
              organizationRoles: 'admin',
              updatedAt: '2021-04-30T23:37:37Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String6469479',
                  stripeId: 'String',
                  updatedAt: '2021-04-30T23:37:37Z',
                },
              },
            },
          },

          project: {
            create: { title: 'String', updatedAt: '2021-04-30T23:37:37Z' },
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
          updatedAt: '2021-04-30T23:37:37Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String930897',
              organizationRoles: 'admin',
              updatedAt: '2021-04-30T23:37:37Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String6947354',
                  stripeId: 'String',
                  updatedAt: '2021-04-30T23:37:37Z',
                },
              },
            },
          },

          project: {
            create: { title: 'String', updatedAt: '2021-04-30T23:37:37Z' },
          },
        },
      },
    },
  },
})
