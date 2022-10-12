// console.log("i");

// const options = {
//     method: "GET",
//     headers: "X-Fungenerators-Api-Secret";
    
// }
const url = "https://api.publicapis.org/entries";

async function callApi() {

    const response = await fetch(url);
    const json = await response.json();

    // results = json.entries;
    console.log(json.entries);

    

    for(let i = 0; i < json.entries.length; i++) {
        console.log(json.entries[i].API);
        console.log(json.entries[i].Description);
        console.log(json.entries[i].Link);
    };
}

callApi();