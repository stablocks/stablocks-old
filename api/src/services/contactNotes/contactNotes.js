import { db } from 'src/lib/db'

export const contactNotes = () => {
  return db.contactNote.findMany()
}

export const contactNote = ({ id }) => {
  return db.contactNote.findUnique({
    where: { id },
  })
}

export const createContactNote = ({ input }) => {
  return db.contactNote.create({
    data: input,
  })
}

export const updateContactNote = ({ id, input }) => {
  return db.contactNote.update({
    data: input,
    where: { id },
  })
}

export const deleteContactNote = ({ id }) => {
  return db.contactNote.delete({
    where: { id },
  })
}

export const ContactNote = {
  contact: (_obj, { root }) =>
    db.contactNote.findUnique({ where: { id: root.id } }).contact(),
  employee: (_obj, { root }) =>
    db.contactNote.findUnique({ where: { id: root.id } }).employee(),
}
