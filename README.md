# Promise.defer

[![Greenkeeper badge](https://badges.greenkeeper.io/steelbrain/promise.defer.svg)](https://greenkeeper.io/)

`promise.defer` is a lightweight NPM package that allows you to create promise synchronously

## Installation

```
npm install --save promise.defer
```

## API

```js
type Deferred = {
  reject: Function,
  resolve: Function,
  promise: Promise,
}

export default function promiseDefer(): Deferred;
```

## Example Usage

```js
import FS from 'fs'
import promiseDefer from 'promise.defer'

export default function doSomething() {
  const deferred = promiseDefer()
  FS.readFile('/etc/passwd', function(error, contents) {
    if (error) {
      deferred.reject(error)
    } else {
      deferred.resolve(contents)
    }
  })
  return deferred.promise
}
```

## License

This package is licensed under the terms of MIT License. See the LICENSE file for more info.
