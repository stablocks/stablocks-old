export const standard = defineScenario({
  ticketMessage: {
    one: {
      message: 'String',
      ticket: {
        create: {
          title: 'String',
          status: 'open',
          updatedAt: '2021-04-29T23:48:27Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String',
              organizationRoles: 'admin',
              updatedAt: '2021-04-29T23:48:27Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String5053963',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:48:27Z',
                },
              },
            },
          },
        },
      },
    },

    two: {
      message: 'String',
      ticket: {
        create: {
          title: 'String',
          status: 'open',
          updatedAt: '2021-04-29T23:48:27Z',
          assigned: {
            create: {
              firstName: 'String',
              lastName: 'String',
              email: 'String',
              organizationRoles: 'admin',
              updatedAt: '2021-04-29T23:48:27Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String706660',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:48:27Z',
                },
              },
            },
          },
        },
      },
    },
  },
})
