/* @flow */

import { wait, it } from 'jasmine-fix'
import promiseDefer from '../src'

describe('Promise.defer', function() {
  it('returns the expected return value', function() {
    const deferred = promiseDefer()
    expect(typeof deferred.resolve).toBe('function')
    expect(typeof deferred.reject).toBe('function')
    expect(typeof deferred.promise).toBe('object')
    expect(deferred.promise instanceof Promise).toBe(true)
  })
  it('rejects properly', async function() {
    let rejected = false
    let resolved = false
    const deferred = promiseDefer()
    deferred.promise.then(() => (resolved = true)).catch(() => (rejected = true))

    await wait(0)
    expect(resolved).toBe(false)
    expect(rejected).toBe(false)
    deferred.reject()
    await wait(0)
    expect(resolved).toBe(false)
    expect(rejected).toBe(true)
  })
  it('resolves properly', async function() {
    let rejected = false
    let resolved = false
    const deferred = promiseDefer()
    deferred.promise.then(() => (resolved = true)).catch(() => (rejected = true))

    await wait(0)
    expect(resolved).toBe(false)
    expect(rejected).toBe(false)
    deferred.resolve()
    await wait(0)
    expect(resolved).toBe(true)
    expect(rejected).toBe(false)
  })
})
