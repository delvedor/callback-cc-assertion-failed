import t from 'tap'
import Fastify from 'fastify'
import fp from 'fastify-plugin'
import App from './index.js'

async function build (t, opts = {}) {
  const app = Fastify()
  await app.register(fp(App))

  t.teardown(app.close.bind(app))

  return app
}

t.test('this is fine', async t => {
  const app = await build(t)
  t.ok(app.foo != null)
})
