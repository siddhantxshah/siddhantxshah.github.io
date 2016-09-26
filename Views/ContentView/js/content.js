var contentApp = angular.module('contentApp',['ngRoute']);

contentApp.config(function($routeProvider){
  $routeProvider
  .when("/content/contentPageOne",{
    templateUrl: 'UI_Website/Views/ContentView/pageOne.html'
  })
  .otherwise("/contentPageOne");

});
