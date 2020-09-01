const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const container = document.querySelector(".gamesContainer");

async function gamesApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const gamesResult = result.results
        container.innerHTML="";

        console.log(result);

        for (let i = 0; i < gamesResult.length; i++) {
            container.innerHTML += `
                            <div class="games"> 
                              <img src= "${gamesResult[i].background_image}" alt= "${gamesResult[i].name}"/>
                              <h4>${gamesResult[i].name}</h4>
                             <p>Rating ${gamesResult[i].rating}/${gamesResult[i].rating_top}</p>
                             <p>Released: ${gamesResult[i].released}</p>
                             </div>`

        }

    } catch (error) {
        console.log(error);
    }

}
gamesApi();


