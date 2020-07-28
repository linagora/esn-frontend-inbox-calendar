'use strict';

angular.module('esn.inbox-calendar', [
  'esn.session',
  'esn.notification',
  'esn.i18n',
  'esn.calendar.libs',
  'esn.resource.libs'
]);
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');

require('esn-frontend-calendar/src/esn.calendar.libs/app/app.module.js');
require('esn-frontend-calendar/src/esn.resource.libs/app/app.module.js');

require('./app.constants.js');
require('./invitation-message/blue-bar/invitation-message-blue-bar.component.js');
require('./invitation-message/blue-bar/invitation-message-blue-bar.controller.js');
require('./invitation-message/indicator/invitation-message-indicator.component.js');
require('./resource-management/blue-bar/resource-management-blue-bar.component.js');
require('./resource-management/blue-bar/resource-management-blue-bar.controller.js');
require('./resource-management/indicator/resource-management-indicator.component.js');