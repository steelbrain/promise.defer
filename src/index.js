/* @flow */

function promiseDefer() {
  let resolve
  let reject
  const promise = new Promise(function(givenResolve, givenReject) {
    resolve = givenResolve
    reject = givenReject
  })
  return { promise, resolve, reject }
}

module.exports = promiseDefer()
