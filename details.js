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
                                <h1 class="detailCard">${json.id}</h1>
                                <h2 class="detailType">${json.type}</h2>
                                <p class="detailP">${json.setup}</p>
                              
                             `;

                              }