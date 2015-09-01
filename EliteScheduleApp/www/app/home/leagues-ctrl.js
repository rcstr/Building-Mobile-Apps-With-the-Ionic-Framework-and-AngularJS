(function() {
  'use strict';

  angular.module('eliteApp').controller('LeaguesCrl', ['eliteApi', LeaguesCrl]);

  function LeaguesCrl(eliteApi) {
    var leagues = eliteApi.getLeagues();
    var leaguesData = eliteApi.getLeaguesData();
  }
})();
