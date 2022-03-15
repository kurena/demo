'use strict'
const seq = require('../lib/orm/sequelize')

module.exports = async function (fastify, opts) {
  const { badRequest } = fastify.httpErrors
  fastify.get('/data', async function (request, reply) {
    try {
    const { models: { OrderItem } } = await seq.getConnection()
    const data = await OrderItem.findAll()
    return data
    } catch (error) {
      console.log('Error', error)
      throw badRequest()
    }
  })
}
