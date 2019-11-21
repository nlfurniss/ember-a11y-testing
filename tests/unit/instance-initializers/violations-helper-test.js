/* global sinon */

import Application from '@ember/application';
import { initialize } from 'dummy/instance-initializers/violations-helper';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

let sandbox;

module('Unit | Instance Initializer | violations-helper', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'initializer under test',
      initialize
    });
    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();

    sandbox = sinon.createSandbox();
  });
  hooks.afterEach(function() {
    run(this.application, 'destroy');
    run(this.instance, 'destroy');

    sandbox.restore();
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.instance.boot();

    assert.ok(window.violationsHelper);
  });
});
