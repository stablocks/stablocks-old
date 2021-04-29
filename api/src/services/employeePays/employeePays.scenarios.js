export const standard = defineScenario({
  employeePay: {
    one: {
      amount: 2339393,
      type: 'salary',
      updatedAt: '2021-04-29T23:45:15Z',
      employee: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:45:15Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String8916382',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:15Z',
            },
          },
        },
      },
    },

    two: {
      amount: 5407513,
      type: 'salary',
      updatedAt: '2021-04-29T23:45:15Z',
      employee: {
        create: {
          firstName: 'String',
          lastName: 'String',
          email: 'String',
          organizationRoles: 'admin',
          updatedAt: '2021-04-29T23:45:15Z',
          organization: {
            create: {
              name: 'String',
              slug: 'String306128',
              stripeId: 'String',
              updatedAt: '2021-04-29T23:45:15Z',
            },
          },
        },
      },
    },
  },
})
