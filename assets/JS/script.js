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
    
    var userEL = "https://www.loc.gov/search/?q=" + topic + "c=25&sb=date&fo=json";
    fetch(userEL).then(function(response) {
        console.log(response)
        return response.json();

    }).then(function(data){
        console.log(data);
        printArticleInfo(data)
        // add function here that will print the artiles to the page
    });

}

var searchBtn = document.getElementById("sBtn");
var input = document.getElementById("searchParam");
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    getInfo(input.value);
});
input.addEventListener('keyup', function(event){
    if(event.code === 'Enter' && input.value !== ''){
        event.preventDefault;
        getInfo(input.value)
    }

})
function printArticleInfo(data){
    // code here adds content from data
    // takes data appends to page
    // print title and url results 
    var cardEl = document.createElement("div")
    cardEl.classList.add("card");
    var cardHead = document.createElement("div");
    cardHead.classList.add("card-header");
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card-body");
    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    var cardLink = document.createElement("a");
    cardLink.classList.add("btn", "btn-primary");
    var cardsPL = document.getElementById('rightColcontainer')

    cardTitle.textContent = data.results[1].title;
    cardText.textContent = data.results[1].description;
    cardLink.setAttribute("href", data.results[1].url);
    cardLink.textContent = "View full page";
    cardHead.textContent = data.results[0].location_state;
    cardEl.appendChild(cardHead);
    cardEl.appendChild(cardTitle);
    cardContainer.appendChild(cardTitle)
    cardContainer.appendChild(cardText)
    cardContainer.appendChild(cardLink)
    cardEl.appendChild(cardContainer);
    cardsPL.appendChild(cardEl)

}