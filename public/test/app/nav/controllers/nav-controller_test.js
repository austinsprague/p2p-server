/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('NavCtrl', function () {
  var ctrl;

  beforeEach(module('nav'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NavCtrl');
  }));

  it('should have ctrlName as NavCtrl', function () {
    expect(ctrl.ctrlName).to.equal('NavCtrl');
  });
});
