angular.module('ngPokemon')
    .controller('DetailController',['$scope', '$route', 'PokemonService', function($scope, $route, PokemonService){
        var pokemonID = $route.current.params.pokemonId;

        $scope.name = pokemonID + "in Detail";
        getPokemonResult = function(){
            PokemonService.getPokemonResult(pokemonID).then(
                function(data){
                    $scope.pokemon =data;
                },
                function(error){
                    $scope.errorResponse = error.statusText;
                });
        }

        getPokemonResult();
    }]);