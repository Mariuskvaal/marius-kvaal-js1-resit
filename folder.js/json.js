const Container = document.querySelector(".content");

const url ="https://api.noroff.dev/api/v1/jokes";

async function getJokes() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    //console.log(json[i]);

    for (let i = 0; i < json.length; i++) {
        //console.log(json[i].type);   

        Container.innerHTML += `<a  href="details.html?id=${json[i].id}" class="card">
                                <h2 class="overskrif-jokes">${json[i].type}</h2>
                                <p class="p-jokes">${json[i].setup}</p>
    </a>` 
    

    }                                                                                     
 }

 catch(error) {
    console.log(error)
 }
    };

getJokes();

    function showOnlyGeneralJokes(){

      const filter = json.filter((filter) => {
         if(json[i].type === general){
            return true;
         }
      })

    }

    showOnlyGeneralJokes();
