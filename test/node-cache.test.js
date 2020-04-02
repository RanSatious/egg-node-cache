'use strict';

const mock = require('egg-mock');

describe('test/node-cache.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/node-cache-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, cache')
      .expect(200);
  });
});
