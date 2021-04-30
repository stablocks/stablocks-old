export const standard = defineScenario({
  applicationAnswer: {
    one: {
      answer: 'String',
      application: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          status: 'submitted',
          updatedAt: '2021-04-30T23:35:16Z',
          job: {
            create: {
              title: 'String',
              description: 'String',
              updatedAt: '2021-04-30T23:35:17Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String4786735',
                  stripeId: 'String',
                  updatedAt: '2021-04-30T23:35:17Z',
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
          updatedAt: '2021-04-30T23:35:17Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String9060150',
              stripeId: 'String',
              updatedAt: '2021-04-30T23:35:17Z',
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
          email: 'String',
          status: 'submitted',
          updatedAt: '2021-04-30T23:35:17Z',
          job: {
            create: {
              title: 'String',
              description: 'String',
              updatedAt: '2021-04-30T23:35:17Z',
              organization: {
                create: {
                  name: 'String',
                  slug: 'String6393977',
                  stripeId: 'String',
                  updatedAt: '2021-04-30T23:35:17Z',
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
          updatedAt: '2021-04-30T23:35:17Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String6869294',
              stripeId: 'String',
              updatedAt: '2021-04-30T23:35:17Z',
            },
          },
        },
      },
    },
  },
})
