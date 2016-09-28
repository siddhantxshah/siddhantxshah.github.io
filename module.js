var uiApp = angular.module('uiApp',['ngRoute']);

uiApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'Views/home.html'
  })
  .when("/content",{
      templateUrl: 'Views/ContentView/ContentView.html'
  })
  .otherwise('/');




});
