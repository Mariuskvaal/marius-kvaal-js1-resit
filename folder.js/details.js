const detailContainer = document.querySelector(".detail-content");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const url ="https://api.noroff.dev/api/v1/jokes/" + id;

console.log(url);

async function getDetails() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    createHtml(json);
                                                                                
 }

 catch(error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);

 }
    };


getDetails(); 

function createHtml (json){

detailContainer.innerHTML += `
                                <h1 class="detailCard"> Joke nr:${json.id}</h1>
                                <h3 class="detailType">Type: ${json.type}</h3>
                                <p class="detailSetup">${json.setup}</p>
                                <p class="detailPunchline">${json.punchline}</p>

                              
                             `;

                              }



                              function showPunchline(){
                                 var x =document.querySelector(".detailPunchline");

                                 if(x.style.display === "none"){
                                    x.style.display ="block";
                                 }

                                 else {
                                    x.style.display = "none";
                                 }
                              }