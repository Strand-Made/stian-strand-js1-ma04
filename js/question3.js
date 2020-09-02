const container = document.querySelector(".container");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;

async function collectGames() {
    try {
        const response = await fetch(url);
        const gameDetails = await response.json();
    
        console.log(gameDetails);

        container.innerHTML = "";
        createHtml(gameDetails);


    } catch (error) {
        console.log(error);
        container.innerHTML ="Dang! Would you look at that! " + (error);

    }

} 

collectGames();

function createHtml (gameDetails) {
    container.innerHTML = `<h1>${gameDetails.name}</h1>
                            <div class="gameImage"
                                style="background-image: url('${gameDetails.background_image}')"></div>
                            <div class="gameDescription"> <time> Released ${gameDetails.released}</time>  <p>${gameDetails.description}</p>
                                <p> Rating: ${gameDetails.rating} of ${gameDetails.rating_top}</p>
                             </div>
                            
                            `
}