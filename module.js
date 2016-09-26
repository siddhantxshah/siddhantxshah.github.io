var uiApp = angular.module('uiApp',['ngRoute']);

uiApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'Views/ContentView/ContentView.html'
  })
  .when("/content",{
      templateUrl: 'Views/ContentView/ContentView.html'
  })
  .otherwise('/');



});
