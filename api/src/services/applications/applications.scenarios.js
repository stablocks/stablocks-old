export const standard = defineScenario({
  application: {
    one: {
      firstName: 'String',
      lastName: 'String',
      email: 'String',
      status: 'submitted',
      updatedAt: '2021-04-30T23:35:04Z',
      job: {
        create: {
          title: 'String',
          description: 'String',
          updatedAt: '2021-04-30T23:35:04Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String9199656',
              stripeId: 'String',
              updatedAt: '2021-04-30T23:35:05Z',
            },
          },
        },
      },
    },

    two: {
      firstName: 'String',
      lastName: 'String',
      email: 'String',
      status: 'submitted',
      updatedAt: '2021-04-30T23:35:05Z',
      job: {
        create: {
          title: 'String',
          description: 'String',
          updatedAt: '2021-04-30T23:35:05Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String6466299',
              stripeId: 'String',
              updatedAt: '2021-04-30T23:35:05Z',
            },
          },
        },
      },
    },
  },
})
