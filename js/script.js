// console.log("i");

//const url = "https://api.publicapis.org/entries"; API with no authentication, links to a lot of different apis.

const options = {
    method: "GET",
    headers: {
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

const url = "https://api.thedogapi.com/v1/breeds";

const resultsContainer = document.querySelector(".results");

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    setTimeout(function () {
        resultsContainer.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            resultsContainer.innerHTML += `<a href="details.html?id=${json[i].id}"class="card">
                                                <h3>${json[i].name}</h3>
                                                <li><b>Life span: </b>${json[i].life_span}</li>
                                                <li><b>Temperament: </b>${json[i].temperament}</li>
                                                <div>
                                                    <img src="${json[i].image.url}" alt="${json[i].name}" />
                                                </div>
                                            </a>`;
        }
    }, 2000);
}

callApi();
