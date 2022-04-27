/* CODE REFERENED FROM
https://stackoverflow.com/questions/20147442/using-onclick-on-images-to-display-text
*/

//function that uses a value to determine the game selected and displays its details in the info box
function displayGame(gameNum) {

    //variable declarations and intialisation. This is where links to HTML elements are established.
    let num = gameNum;
    let gameInfoBox = document.getElementById("gameInfoBox");
    let gameDescBox = document.getElementById("gameDesc");
    let gameTable = document.getElementById("tblGameInfo");

    let gameDesc = "";
    let gameGenres = "";
    let gameSales = "";
    let gamePrice = "";

    let genresRow = document.getElementById("tblGenresData");
    let salesRow = document.getElementById("tblSalesData");
    let priceRow = document.getElementById("tblPriceData");

    let gameName = document.getElementById("gameName");

    /* CODE REFERENCED FROM
    https://stackoverflow.com/questions/10474696/how-to-preserve-whitespace-in-dynamically-added-javascript-dom-element-without-u
    */

    //switch case that determines what game to display info for and displays it on the relevant HTML element
    switch(num)
    {
        case 0:
            gameDesc = "The only aim in Rust is to survive. Everything wants you to die - the island wildlife andother inhabitants, the environment, other survivors. Do whatever it takes to last another night.";
            gameDesc = gameDesc.replace(/ /g, '&nbsp;');
            gameDescBox.innerHTML = gameDesc;

            gameGenres = "Sandbox - survival - first person shooter - open world";
            gameGenres = gameGenres.replace(/ /g, '&nbsp;');
            genresRow.innerHTML = gameGenres;

            gameSales = "9 000 000";
            gameSales = gameSales.replace(/ /g, '&nbsp;');
            salesRow.innerHTML = gameSales;

            gamePrice = "$15";
            priceRow.innerHTML = gamePrice;

            gameName.innerHTML = "Rust";
            localStorage.setItem("gameName", "Rust");
            $('#lblLikes').text("Likes: "+Number(localStorage.getItem("rustLikes")));
        break;

        case 1:
            gameDesc = "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.";
            gameDesc = gameDesc.replace(/ /g, '&nbsp;');
            gameDescBox.innerHTML = gameDesc;

            gameGenres = "First person shooter - competitive - realistic - team based";
            gameGenres = gameGenres.replace(/ /g, '&nbsp;');
            genresRow.innerHTML = gameGenres;

            gameSales = "26 900 000";
            gameSales = gameSales.replace(/ /g, '&nbsp;');
            salesRow.innerHTML = gameSales;

            gamePrice = "FREE";
            priceRow.innerHTML = gamePrice;

            gameName.innerHTML = "Counter-strike: Global Offensive";
            localStorage.setItem("gameName", "Counter-strike: Global Offensive");
            $('#lblLikes').text("Likes: "+Number(localStorage.getItem("csgoLikes")));
        break;

        case 2:
            gameDesc = "Minecraft: Explore your own unique world, survive the night and create anything you can imagine.";
            gameDesc = gameDesc.replace(/ /g, '&nbsp;');
            gameDescBox.innerHTML = gameDesc;

            gameGenres = "Open world - survival - sandbox - fantasy";
            gameGenres = gameGenres.replace(/ /g, '&nbsp;');
            genresRow.innerHTML = gameGenres;

            gameSales = "200 000 000";
            gameSales = gameSales.replace(/ /g, '&nbsp;');
            salesRow.innerHTML = gameSales;
            
            gamePrice = "$30";
            priceRow.innerHTML = gamePrice;

            gameName.innerHTML = "Minecraft";
            localStorage.setItem("gameName", "Minecraft");
            $('#lblLikes').text("Likes: "+Number(localStorage.getItem("minecraftLikes")));

        break;

        case 3:
            gameDesc = "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.";
            gameDesc = gameDesc.replace(/ /g, '&nbsp;');
            gameDescBox.innerHTML = gameDesc;

            gameGenres = "Action adventure - open world - third person shooter";
            gameGenres = gameGenres.replace(/ /g, '&nbsp;');
            genresRow.innerHTML = gameGenres;

            gameSales = "160 000 000";
            gameSales = gameSales.replace(/ /g, '&nbsp;');
            salesRow.innerHTML = gameSales;
            
            gamePrice = "$18";
            priceRow.innerHTML = gamePrice;

            gameName.innerHTML = "Grand Theft Auto V";
            localStorage.setItem("gameName", "Grand Theft Auto V");
            $('#lblLikes').text("Likes: "+Number(localStorage.getItem("gtaLikes")));

        break;

        default:
            break;
    }

}