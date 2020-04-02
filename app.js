const NodeCache = require('node-cache');

const createCache = (config, app) => {
  app.beforeStart(async () => {
    app.logger.info('[egg-node-cache] init instance success');
  });
  return new NodeCache(config);
};

module.exports = app => {
  app.addSingleton('cache', createCache);
};
