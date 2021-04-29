import { db } from 'src/lib/db'

export const fieldOrders = () => {
  return db.fieldOrder.findMany()
}

export const fieldOrder = ({ id }) => {
  return db.fieldOrder.findUnique({
    where: { id },
  })
}

export const createFieldOrder = ({ input }) => {
  return db.fieldOrder.create({
    data: input,
  })
}

export const updateFieldOrder = ({ id, input }) => {
  return db.fieldOrder.update({
    data: input,
    where: { id },
  })
}

export const deleteFieldOrder = ({ id }) => {
  return db.fieldOrder.delete({
    where: { id },
  })
}

export const FieldOrder = {
  job: (_obj, { root }) =>
    db.fieldOrder.findUnique({ where: { id: root.id } }).job(),
  field: (_obj, { root }) =>
    db.fieldOrder.findUnique({ where: { id: root.id } }).field(),
}
