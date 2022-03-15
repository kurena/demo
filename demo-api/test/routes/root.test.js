'use strict'

const { test } = require('tap')
const { build } = require('../helper')
const seq = require('../../lib/orm/sequelize')
const sinon = require('sinon')

test('data route', async (t) => {
  const app = await build(t)
  const expected = 'response data'
  const stub = sinon.stub(seq, 'getConnection')
  stub.resolves({
    models: {
      OrderItem: {
        findAll: () => expected
      }
    }
  })
  const res = await app.inject({
    url: '/data'
  })
  t.same(res.payload, expected)
})
