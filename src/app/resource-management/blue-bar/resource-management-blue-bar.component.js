'use strict';

require('./resource-management-blue-bar.controller');

angular.module('esn.inbox-calendar')
  .component('calInboxResourceManagementBlueBar', {
    controller: 'calInboxResourceManagementBlueBarController',
    bindings: {
      message: '<'
    },
    template: require('./resource-management-blue-bar.pug')
  });
