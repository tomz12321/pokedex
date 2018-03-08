angular.module('ngPokemon').
factory('PokemonService',['$http','$q', function($http, $q){
    var service = {
        //pokemonResultList: [],
        //count: 0,
        //pokemonResult: {},
        getPokemonResult : getPokemonResult,
        //get20PokemonResults : get20PokemonResults
    };

    return service;

    /*function get20PokemonResults(){
        var deferred =$q.defer();

        $http({
            method : "get",
            url : "http://pokeapi.co/api/v2/pokemon"
        }).
        then(function(resultList){
            pokemonResults = resultList.results;
            count = resultList.count;
            deferred.resolve(resultList);
        }, function(response){
            deferred.reject(response || "Failed to get Pokemon results");
        });

        return deferred.promise;
    };*/

    function getPokemonResult(idOrName){
        var deferred =$q.defer();

        $http({
            method : "get",
            url : "http://pokeapi.co/api/v2/pokemon/" + idOrName
        }).
        then(function(result){
            deferred.resolve(result.data);
        }, function(response){
            console.log(response);
            deferred.reject(response);
        });

        return deferred.promise;
    };
}]);