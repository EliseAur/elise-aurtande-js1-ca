const options = {
    method: "GET",
    headers: {
        "x-api-key": "live_GqNMBqU0JDhtsGrfh0aCydwIb9LtegmerXbVQA8nKDxXFZDYIYMJWmcZX4jESb1R",
    },
};

const url = "https://api.thedogapi.com/v1/breeds/";

const resultsContainer = document.querySelector(".results");

async function callApi() {
    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    
        setTimeout(function () {
            resultsContainer.innerHTML = "";
    
            for (let i = 0; i < json.length; i++) {
                resultsContainer.innerHTML += `<a href="details.html?id=${json[i].id}"class="card">
                                                    <h3>${json[i].name}</h3>
                                                    <li><b>Bred for: </b>${json[i].bred_for}</li>
                                                    <div class="image" style="background-image: url('${json[i].image.url}')")></div>
                                                </a>`;
            }
        }, 3000);

    } catch(error) {
        setTimeout(function () {
            console.log("Error when calling the API:", error);
            resultsContainer.innerHTML = "";
            resultsContainer.innerHTML += displayError("An error occoured when loading the list of dogs");
        }, 1500);
    }
}
    
callApi();
