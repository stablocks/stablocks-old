import { db } from 'src/lib/db'

export const ticketMessages = () => {
  return db.ticketMessage.findMany()
}

export const ticketMessage = ({ id }) => {
  return db.ticketMessage.findUnique({
    where: { id },
  })
}

export const createTicketMessage = ({ input }) => {
  return db.ticketMessage.create({
    data: input,
  })
}

export const updateTicketMessage = ({ id, input }) => {
  return db.ticketMessage.update({
    data: input,
    where: { id },
  })
}

export const deleteTicketMessage = ({ id }) => {
  return db.ticketMessage.delete({
    where: { id },
  })
}

export const TicketMessage = {
  ticket: (_obj, { root }) =>
    db.ticketMessage.findUnique({ where: { id: root.id } }).ticket(),
  employee: (_obj, { root }) =>
    db.ticketMessage.findUnique({ where: { id: root.id } }).employee(),
  contact: (_obj, { root }) =>
    db.ticketMessage.findUnique({ where: { id: root.id } }).contact(),
}
