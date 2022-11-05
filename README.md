# callback-cc-assertion-failed

This code will cause a C error `node[3112]: ../src/api/callback.cc:141:void node::InternalCallbackScope::Close(): Assertion `(env_->execution_async_id()) == (0)' failed.`

The issue can be reproduced with Node.js ≥ 16, while Node.js 14 correctly throws a `UnhandledPromiseRejectionWarning`.

## To reproduce

```
npm i
node test.js
```
