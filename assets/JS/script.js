function getLeagueStats(){
    var APIkey = 'RGAPI-12b8ee07-15ac-491e-bc88-949098ac628b';
    var statsUrl ='https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=RGAPI-' + APIkey;
    fetch(statsUrl).then(function(response){
       return response.json();
    }).then(function(data){
        console.log(data);
    })
}
getLeagueStats();