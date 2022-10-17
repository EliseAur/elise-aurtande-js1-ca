const resultsContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

// const imageContainer = document.querySelector(".container");
// const queryStringImage = document.location.search;
// const paramsImage = new URLSearchParams(queryStringImage);
// const image = paramsImage.get("reference_image_id");
// console.log(image);

const options = {
    method: "GET",
    headers: {
        //"x-api-host": "api.thedogapi.com",
        //"Access-Control-Allow-Origin": "https://api.thedogapi",
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

const url = "https://api.thedogapi.com/v1/breeds/" + id;
//const urlImage = `https://cdn2.thedogapi.com/images/${image}.jpg`;

async function getDetails() {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    // const secondResponse = await fetch(urlImage);
    // const detailsImage = await secondResponse.json();
    // console.log(detailsImage);

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

const imageContainer = document.querySelector(".container");
const queryStringImage = document.location.search;
const paramsImage = new URLSearchParams(queryStringImage);
const image = paramsImage.get("reference_image_id");
console.log(image);

const imageApi = {
    method: "GET",
    headers: {
        //"x-api-host": "api.thedogapi.com",
        //"Access-Control-Allow-Origin": "https://api.thedogapi",
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

//const url = "https://api.thedogapi.com/v1/breeds/" + id;
const urlImage = `https://cdn2.thedogapi.com/images/${image}.jpg`;

async function getImage() {
    // const response = await fetch(url);
    // const details = await response.json();
    // console.log(details);

    const secondResponse = await fetch(urlImage);
    const detailsImage = await secondResponse.json();
    console.log(detailsImage);

    setTimeout(function () {
        imageContainer.innerHTML = "";

        imageContainer.innerHTML = `<img src="${detailsImage}" alt="${details.name}" />`;
    }, 2000);
}

getImage();
