const resultsContainer = document.querySelector(".container");
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
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    setTimeout(function () {
        resultsContainer.innerHTML = "";

        resultsContainer.innerHTML = `<div class="card">
                                                <h3>${details.name}</h3>
                                                <li><b>Life span: </b>${details.life_span}</li>
                                                <li><b>Temperament: </b>${details.temperament}</li>
                                                <div>
                                                    <img src="${details.reference_image_id}" alt="${details.name}" />
                                                </div>
                                            </div>`;
    }, 2000);
}

getDetails();