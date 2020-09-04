'use strict';

require('./invitation-message-blue-bar.controller');

angular.module('esn.inbox-calendar')
  .component('calInboxInvitationMessageBlueBar', {
    controller: 'calInboxInvitationMessageBlueBarController',
    bindings: {
      message: '<'
    },
    template: require('./invitation-message-blue-bar.pug')
  });
