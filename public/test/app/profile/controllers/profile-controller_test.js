/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ProfileCtrl', function () {
  var ctrl;

  beforeEach(module('profile'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ProfileCtrl');
  }));

  it('should have ctrlName as ProfileCtrl', function () {
    expect(ctrl.ctrlName).to.equal('ProfileCtrl');
  });
});
