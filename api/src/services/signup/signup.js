import { db } from 'src/lib/db'

export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

export const createSignup = ({ input }) => {
  const slug = `${slugify(input.organizationName)}-${
    Math.floor(Math.random() * 10000) + 1
  }`

  return db.organization.create({
    data: {
      name: input.organizationName,
      slug: slug,
      stripeId: 'stripe',
      employees: {
        create: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          organizationRoles: ['admin'],
        },
      },
    },
  })
}
