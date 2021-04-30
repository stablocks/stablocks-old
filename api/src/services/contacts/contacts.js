import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}

export const Contact = {
  company: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).company(),
  organization: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).organization(),
  employee: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).employee(),
  note: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).note(),
  tickets: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).tickets(),
  ticketMessage: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).ticketMessage(),
}
