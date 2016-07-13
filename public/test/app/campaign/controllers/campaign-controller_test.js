/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CampaignCtrl', function () {
  var ctrl;

  beforeEach(module('campaign'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CampaignCtrl');
  }));

  it('should have ctrlName as CampaignCtrl', function () {
    expect(ctrl.ctrlName).to.equal('CampaignCtrl');
  });
});
