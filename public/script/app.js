console.log('js');
var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($location){
  console.log('in MainController');

  var vm = this;
  vm.iconsArray = icons;
  console.log(vm.iconsArray);

});//end MainController
