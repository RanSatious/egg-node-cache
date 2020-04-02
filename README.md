# egg-node-cache

egg.js plugin for [node-cache](https://github.com/mpneuried/nodecache)

## Install

```bash
$ npm i egg-node-cache --save
```

## Configuration

enable plugin

```js
// {app_root}/config/plugin.js
exports.cache = {
  enable: true,
  package: 'egg-node-cache',
};
```

config

```js
// {app_root}/config/config.default.js
exports.cache = {
  client: {
    // set more options at https://github.com/node-cache/node-cache#options
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Usage

```js
// {app_root}/app/service/cache.js
class CacheService extends Service {
  get(key) {
    this.ctx.app.cache.get(key);
  }

  set(key, value) {
    this.ctx.app.cache.set(key, value);
  }
}
```

## License

[MIT](LICENSE)
