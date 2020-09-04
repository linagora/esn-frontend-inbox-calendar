window.jstz = require('esn-frontend-common-libs/src/frontend/components/jstzdetect/jstz.js');
window.jQuery = require('jquery/dist/jquery.js');
window.$ = window.jQuery;
require('esn-frontend-common-libs/src/frontend/vendor-libs.js');
require('esn-frontend-common-libs/src/frontend/js/material.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-videoconference-calendar/src/linagora.esn.videoconference/app/videoconference.module.js');
require('esn-frontend-videoconference-calendar/src/linagora.esn.videoconference.calendar/app/videoconference-calendar.module.js');
require('fullcalendar/dist/fullcalendar.js');
require('esn-frontend-mailto-handler/src/index.js');
require('angular-mocks/angular-mocks.js');

require('./app/app.module.js');

require('../test/config/mocks/injector.js');
require('../test/config/mocks/modules.js');
require('../test/config/mocks/ng-mock-component.js');
require('../test/config/mocks/reset-dynamic-directive-injections.js');

const sinonChai = require('sinon-chai/lib/sinon-chai.js');
const shallowDeepEqual = require('chai-shallow-deep-equal/chai-shallow-deep-equal.js');
const chaiDatetime = require('chai-datetime/chai-datetime.js');

/* global chai */
chai.use(sinonChai);
chai.use(shallowDeepEqual);
chai.use(chaiDatetime);

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /\.spec$/);

testsContext.keys().forEach(testsContext);
