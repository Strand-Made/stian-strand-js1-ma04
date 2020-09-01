const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const container = document.querySelector(".gamesContainer");

async function gamesApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const gamesResult = result.results


        console.log(result);

        for (let i = 0; i < gamesResult.length; i++) {
            container.innerHTML += `
                            <div class="games"> 
                              <h4>${gamesResult[i].name}</h4>
                              <img src= "${gamesResult[i].background_image}" alt= "${gamesResult[i].name}"/>
                              <p>Released: ${gamesResult[i].released}</p>
                             <p> Rating ${gamesResult[i].rating} of ${gamesResult[i].rating_top}</p>
                             </div>`

        }

    } catch (error) {
        console.log(error);
    }

}
gamesApi();


