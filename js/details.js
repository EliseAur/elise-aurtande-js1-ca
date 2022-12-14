// Find elements
const resultsContainer = document.querySelector(".container");
const footer = document.querySelector("footer");
footer.style.backgroundColor = "white";

// Get id
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const options = {
    method: "GET",
    headers: {
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

const url = "https://api.thedogapi.com/v1/breeds/" + id;


async function getDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
    
        setTimeout(function () {
            resultsContainer.innerHTML = "";
            footer.style.backgroundColor = "#749e83";
    
            const image = details.reference_image_id;

            document.title = `Dog Breeds | ${details.name}`;
    
            resultsContainer.innerHTML = `<div class="card card-details">
                                                <h2>${details.name}</h2>
                                                <li><b>Bred for: </b>${details.bred_for}</li>
                                                <li><b>Life span: </b>${details.life_span}</li>
                                                <li><b>Height: </b>${details.height.metric}</li>
                                                <li><b>Origin: </b>${details.origin}</li>
                                                <li><b>Temperament: </b>${details.temperament}</li>
                                                <div>
                                                    <img src="https://cdn2.thedogapi.com/images/${details.reference_image_id}.jpg" alt="${details.name}" />
                                                </div> 
                                            </div>`;
        }, 2000);
    } catch (error) {
        setTimeout(function () {
            console.log("Error when calling the API:", error);
            resultsContainer.innerHTML = "";
            resultsContainer.innerHTML += displayError("An error occoured when loading your doggie");
        }, 1500);
    }
    
}

getDetails();
