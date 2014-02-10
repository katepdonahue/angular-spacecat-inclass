'use strict';

var spacecatApp = angular.module('spacecatApp', [
  'ngRoute',
  'spaceCatControllers'
  ]);

spacecatApp.config([
  'routeProvider',
  function($routeProvider) {
    $routeProvider.
    when("/cats", {
      templateURL: 'partials/cat-list.html',
      controller: 'CatListCtrl'
    });
  }]);