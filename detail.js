const detailContainer = document.querySelector(".detail.content");

const queryString = document.location.search; 

const params = New URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.noroff.dev/api/v1/jokes";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);

    }
}

fetchGames();

function createHtml(details) {

    detailContainer.innerHTML = `<h1>${json[i].type}</h1>
    <h2 class="overskrif-jokes">${json[i].type}</h2>
    <p class="p-jokes">${json[i].setup}</p>
`
}

