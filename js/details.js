const options = {
    method: "GET",
    headers: {
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

const url = "https://api.thedogapi.com/v1/breeds/1";

const resultsContainer = document.querySelector(".container");

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
                                                    <img src="${details.image.url}" alt="${details.name}" />
                                                </div>
                                            </div>`;
    }, 2000);
}

getDetails();
