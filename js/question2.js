const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const container = document.querySelector(".gamesContainer");

async function gamesApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const gamesResult = result.results
        container.innerHTML="";

        console.log(result);

        gamesResult.forEach(function(game) {
            container.innerHTML += `
                            <a href="question3.html?id=${game.id}" class="games"> 
                              <img src= "${game.background_image}" alt= "${game.name}"/>
                              <h4>${game.name}</h4>
                             <p>Rating ${game.rating}/${game.rating_top}</p>
                             <p>Released: ${game.released}</p>
                             </a>`
        });

    } catch (error) {
        console.log(error);
    }

}
gamesApi();


