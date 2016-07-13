/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CheckoutCtrl', function () {
  var ctrl;

  beforeEach(module('checkout'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CheckoutCtrl');
  }));

  it('should have ctrlName as CheckoutCtrl', function () {
    expect(ctrl.ctrlName).to.equal('CheckoutCtrl');
  });
});
