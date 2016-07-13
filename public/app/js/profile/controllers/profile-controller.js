(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name profile.controller:ProfileCtrl
   *
   * @description
   *
   */
  angular
    .module('profile')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl($state, $stateParams, ProfileService, $cookies, CampaignDetailService) {
    var vm = this;
    var currentUser = CampaignDetailService.getCurrentUser();
    vm.currentUserName = currentUser.display_name;

    ProfileService.getUser(currentUser.id).then(function(user){
      vm.user = user;
      vm.display_name = user.display_name
    });
    ProfileService.getProjects(currentUser.id).then(function(projects){
      vm.projects = projects;
    });
    ProfileService.getBackedProj(currentUser.id).then(function(projects){
      vm.backedProj = projects;
    });
    vm.createCampaign = function(){
      ProfileService.createCampaign(vm.proj, currentUser.id);
      $state.go('profile');
    }
  }
}());

//# sourceMappingURL=profile-controller.js.map
