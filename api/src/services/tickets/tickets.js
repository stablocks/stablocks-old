import { db } from 'src/lib/db'

export const tickets = () => {
  return db.ticket.findMany()
}

export const ticket = ({ id }) => {
  return db.ticket.findUnique({
    where: { id },
  })
}

export const createTicket = ({ input }) => {
  return db.ticket.create({
    data: input,
  })
}

export const updateTicket = ({ id, input }) => {
  return db.ticket.update({
    data: input,
    where: { id },
  })
}

export const deleteTicket = ({ id }) => {
  return db.ticket.delete({
    where: { id },
  })
}

export const Ticket = {
  contact: (_obj, { root }) =>
    db.ticket.findUnique({ where: { id: root.id } }).contact(),
  assigned: (_obj, { root }) =>
    db.ticket.findUnique({ where: { id: root.id } }).assigned(),
  messages: (_obj, { root }) =>
    db.ticket.findUnique({ where: { id: root.id } }).messages(),
}
