class Foo {
  async close () {
    throw new Error('kaboom')
  }
}

export default async function plugin (app, opts) {
  const foo = new Foo()
  app.decorate('foo', foo)

  app.addHook('onClose', (app, done) => {
    // wrongfully passing a callback on purpose
    app.foo.close(done)
  })
}
