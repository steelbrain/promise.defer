import test from 'ava'
import promiseDefer from '../src'

function wait(timeout: number) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

test('returns the expected return value', function(t) {
  const deferred = promiseDefer()
  t.is(typeof deferred.resolve, 'function')
  t.is(typeof deferred.reject, 'function')
  t.is(typeof deferred.promise, 'object')
  t.true(deferred.promise instanceof Promise)
})
test('rejects properly', async function(t) {
  let rejected = false
  let resolved = false
  const deferred = promiseDefer()
  deferred.promise
    .then(() => {
      resolved = true
    })
    .catch(() => {
      rejected = true
    })

  await wait(0)
  t.is(resolved, false)
  t.is(rejected, false)
  deferred.reject(new Error('rejected'))
  await wait(0)
  t.is(resolved, false)
  t.is(rejected, true)
})
test('resolves properly', async function(t) {
  let rejected = false
  let resolved = false
  const deferred = promiseDefer<void>()
  deferred.promise
    .then(() => {
      resolved = true
    })
    .catch(() => {
      rejected = true
    })

  await wait(0)
  t.is(resolved, false)
  t.is(rejected, false)
  deferred.resolve()
  await wait(0)
  t.is(resolved, true)
  t.is(rejected, false)
})
