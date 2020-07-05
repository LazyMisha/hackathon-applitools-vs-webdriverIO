'use strict';

const { url, browser, eyes, init, tearDown } = require('./BaseTest');
const { Target, RectangleSize } = require('@applitools/eyes-webdriverio');

describe('Task 1', function () {
  before(init);

  it('Cross-Device Elements Test', async () => {
    await browser.url(url);

    // Call Open on eyes to initialize a test session
    await eyes.open(
      browser,
      'Ultrafast grid gridHackathon',
      'Task 1 - Cross-Device Elements Test',
      new RectangleSize(800, 600)
    );

    await eyes.check('Cross-Device Elements Test', Target.window().fully());

    // Call Close on eyes to let the server know it should display the results
    await eyes.closeAsync();
  });

  after(tearDown);
});
