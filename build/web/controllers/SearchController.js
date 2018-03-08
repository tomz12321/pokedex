angular.module('ngPokemon')
    .controller('SearchController', ['$scope', 'PokemonService', function($scope, PokemonService){
        $scope.pokemons = [];
        $scope.count =0;

        $scope.searchPokemon = function(){
            var query = $scope.pokemonName;

            PokemonService.getPokemonResult(query).then(
                function(data){
                    var pokemonResult = {};
                    pokemonResult.name = data.name;
                    pokemonResult.pokemonID = data.id;
                    $scope.pokemons.push(pokemonResult);
                }, function(error){
                    $scope.errorResponse = error.statusText;
                });
        }
    }]);