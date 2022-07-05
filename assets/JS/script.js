// function getLeagueStats(){
//     var APIkey = 'RGAPI-12b8ee07-15ac-491e-bc88-949098ac628b';
//     var statsUrl ='https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=RGAPI-' + APIkey;
//     fetch(statsUrl).then(function(response){
//        return response.json();
//     }).then(function(data){
//         console.log(data);
//     })
// }
// getLeagueStats();

// https://libraryofcongress.github.io/data-exploration/

// https://www.loc.gov/maps/?q=civil war&fo=json

function getInfo(topic) {
    
    var userEL = "https://www.loc.gov/maps/?q=" + topic + "c=25&sb=date_desc";
    fetch(userEL).then(function(response) {
        
        // console.log(response);
        return response.json();

    }) .then(function(data){
        console.log(data);
    });

}

var searchBtn = document.getElementById("sBtn");
var input = document.getElementById("searchParam");
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    getInfo(input.value);
});