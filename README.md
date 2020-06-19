# Promise.defer

`promise.defer` is a lightweight NPM package that allows you to create promise synchronously.

## Installation

```
npm install --save promise.defer
```

## API

```ts
type Deferred<T> = {
  reject(err: Error): void;
  resolve(value: T): void;
  promise: Promise<T>;
}

export default function promiseDefer(): Deferred;
```

## Example Usage

```js
import fs from 'fs'
import promiseDefer from 'promise.defer'

export default function doSomething() {
  const deferred = promiseDefer()
  fs.readFile('/etc/passwd', function(error, contents) {
    if (error) {
      deferred.reject(error)
    } else {
      deferred.resolve(contents)
    }
  })
  return deferred.promise
}
```

CommonJS consumers may need to import it like:

```js
const {default: promiseDefer} = require('promise.defer')
```

## License

This package is licensed under the terms of MIT License. See the LICENSE file for more info.
