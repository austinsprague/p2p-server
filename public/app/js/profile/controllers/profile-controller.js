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

  function ProfileCtrl($state, $stateParams, ProfileService, $cookies) {
    var vm = this;
    var currentUserId = $cookies.getObject('user') || 84;
    console.log(currentUserId);

    ProfileService.getUser(currentUserId).then(function(user){
      vm.user = user;
      vm.display_name = user.display_name;
    });
    ProfileService.getProjects(currentUserId).then(function(projects){
      vm.projects = projects;
    });
    ProfileService.getBackedProj(currentUserId).then(function(projects){
      vm.backedProj = projects;
    });
    vm.createCampaign = function(){
      ProfileService.createCampaign(vm.proj, currentUserId);
      $state.go('profile');
    }
  }
}());

//# sourceMappingURL=profile-controller.js.map
