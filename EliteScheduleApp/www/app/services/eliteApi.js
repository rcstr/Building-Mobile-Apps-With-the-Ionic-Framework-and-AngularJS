(function() {
  'use strict';

  angular.module('eliteApp').factory('eliteApi', ['$http', eliteApi]);

  function eliteApi($http) {
    var leagues = {},
        leaguesData = {};

    $http.get('/app/data/leaguesData.json').success(function(data) {
      leaguesData = data;
    });

    $http.get('/app/data/league.json').success(function(data) {
      leagues = data;
    });

    function getLeagues() {
      return leagues;
    }

    function getLeagueData() {
      return leagueData;
    }

    return {
      getLeague: getLeagues,
      getLeagueData: getLeagueData
    }
  }
})();
