// Reusable function for handling errors. 

function displayError(message = "Unknown error") {
    return `<div class="errorMes card">
                    <h2>Oops...</h2>
                    <p>${message}</p>
                    <a href="index.html">Try again</a>   
            </div>`;
}