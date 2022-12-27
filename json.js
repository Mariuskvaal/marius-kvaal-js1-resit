const Container = document.querySelector(".content");
const buttonGeneral = document.querySelector("#btn-general")

const url ="https://api.noroff.dev/api/v1/jokes";

async function getBlogs() {

    try {

    const response = await fetch(url);

    const json = await response.json();

    //console.log(json);

    for (let i = 0; i < json.length; i++) {
        //console.log(json[i]);   

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


getBlogs();

buttonGeneral.addEventListener("click", e => {
    
    for (let i = 0; i < json.length; i++) {

    console.log(json[i]);

if (json[i].type !== "general") {
        
    }
}  
    console.log(buttonGeneral);
})



console.log(json[i].type);


