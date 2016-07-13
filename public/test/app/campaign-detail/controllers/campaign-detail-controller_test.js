/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CampaignDetailCtrl', function () {
  var ctrl;

  beforeEach(module('campaignDetail'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CampaignDetailCtrl');
  }));

  it('should have ctrlName as CampaignDetailCtrl', function () {
    expect(ctrl.ctrlName).to.equal('CampaignDetailCtrl');
  });
});
