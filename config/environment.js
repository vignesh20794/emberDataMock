'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-data-mock',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    //firebase auth
    firebase: {
      apiKey: "AIzaSyD64I78eK4z03CLNJtgCouRqWQMDX_bEw8",
      authDomain: "ember-store-a6b4a.firebaseapp.com",
      databaseURL: "https://ember-store-a6b4a.firebaseio.com",
      projectId: "ember-store-a6b4a",
      storageBucket: "ember-store-a6b4a.appspot.com",
      messagingSenderId: "437925355997",
      appId: "1:437925355997:web:3e6b8dffa217925e0d9634",
      measurementId: "G-DNLS0NQDRK"
    },
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
