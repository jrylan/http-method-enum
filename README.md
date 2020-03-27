# http-method-enum

HTTP methods as a TypeScript enum.

[![tslint: Slick](https://img.shields.io/badge/tslint-slick-3a6b93.svg?style=flat-square)](https://github.com/typeslick/tslint-slick)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/http-method-enum.svg?style=flat-square)](https://npmjs.org/package/http-method-enum)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/typeslick/http-method-enum/blob/master/LICENSE)

## Install

```sh
$ npm install http-method-enum
```

## Usage

Node.js / CommonJS:

```typescript
const { HTTPMethod } = require('http-method-enum')
```

ESNext / TypeScript:

```typescript
import { HTTPMethod } from 'http-method-enum'

if (res.method === HTTPMethod.GET) {
  // ...
}
```

### All current standard HTTP methods are available as follows:

- CONNECT = 'CONNECT'
- DELETE = 'DELETE'
- GET = 'GET'
- HEAD = 'HEAD'
- OPTIONS = 'OPTIONS'
- PATCH = 'PATCH'
- POST = 'POST'
- PUT = 'PUT'
- TRACE = 'TRACE'

## Related

- [http-method-enum](https://github.com/typeslick/http-method-enum)
- [enum-utils](https://github.com/typeslick/enum-utils)

## News and Updates

[Follow @typeslick on Twitter](https://twitter.com/typeslick) for the latest updates and new project announcements.

## Sponsors

- [Loomble](https://loomble.com/)

## Maintainers

- [Jay Rylan](https://jayrylan.com/)

## License

[MIT](https://github.com/typeslick/http-method-enum/blob/master/LICENSE)
