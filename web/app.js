angular.module('ngPokemon',['ngRoute']).
config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'SearchController',
        templateUrl: 'views/home.html'
    }).when('/pokemonDetail/:pokemonId', {
        controller: 'DetailController',
        templateUrl: 'views/pokemonDetail.html'
    }).otherwise({redirectTo: '/'});
});
