export const standard = defineScenario({
  applicationAnswer: {
    one: {
      answer: 'String',
      application: {
        create: {
          firstName: 'String',
          lastName: 'String',
          status: 'submitted',
          updatedAt: '2021-04-29T23:45:50Z',
          job: {
            create: {
              title: 'String',
              description: 'String',
              updatedAt: '2021-04-29T23:45:50Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String3591917',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:45:50Z',
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
              updatedAt: '2021-04-29T23:45:51Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String2096782',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:45:51Z',
                },
              },
            },
          },
        },
      },

      field: {
        create: {
          title: 'String',
          type: 'input',
          updatedAt: '2021-04-29T23:45:51Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String3672524',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:51Z',
            },
          },
        },
      },
    },

    two: {
      answer: 'String',
      application: {
        create: {
          firstName: 'String',
          lastName: 'String',
          status: 'submitted',
          updatedAt: '2021-04-29T23:45:51Z',
          job: {
            create: {
              title: 'String',
              description: 'String',
              updatedAt: '2021-04-29T23:45:51Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String1577563',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:45:51Z',
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
              updatedAt: '2021-04-29T23:45:51Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String5979988',
                  stripeId: 'String',
                  updatedAt: '2021-04-29T23:45:51Z',
                },
              },
            },
          },
        },
      },

      field: {
        create: {
          title: 'String',
          type: 'input',
          updatedAt: '2021-04-29T23:45:51Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String2178536',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:51Z',
            },
          },
        },
      },
    },
  },
})
