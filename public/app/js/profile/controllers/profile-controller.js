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

  function ProfileCtrl($state, $stateParams, ProfileService) {
    var vm = this;
    if (ProfileService.getCurrentUser()) {
      vm.currentUserId = ProfileService.getCurrentUser()
      vm.currentUserName = ProfileService.getCurrentUser().display_name;
    }

    ProfileService.getUser(vm.currentUserId).then(function(user){
      vm.user = user;
      vm.display_name = user.display_name
    });
    ProfileService.getProjects(vm.currentUserId).then(function(projects){
      vm.projects = projects;
    });
    ProfileService.getBackedProj(vm.currentUserId).then(function(projects){
      vm.backedProj = projects;
    });
    vm.createCampaign = function(){
      ProfileService.createCampaign(vm.proj, vm.currentUserId);
      $state.go('profile');
    }
  }
}());

//# sourceMappingURL=profile-controller.js.map
