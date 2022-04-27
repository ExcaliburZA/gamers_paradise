//variable declarations and initialisation
let savedGames = [];
let ulSaved = document.getElementById("ulSaved");
const countries = ["USA","United Kindom","Japan", "Russia", "Ukraine", "South Africa"];

function OnLoad()
{

        localStorage.setItem("hasLoaded", true);
        //savedGames = [];
        localStorage.setItem("saved", JSON.stringify(savedGames));
        localStorage.setItem("rustLikes", 0);
        localStorage.setItem("csgoLikes", 0);
        localStorage.setItem("minecraftLikes", 0);
        localStorage.setItem("gtaLikes", 0);
}

//onload method for the contact us page that creates the drop down list and triggers animations on the page
function OnLoadContactUs()
{
    CreateDropdown();
    $('#contactFormHeading').slideToggle().slideToggle();
    $('#inputsDiv').hide().fadeIn(2000);
}

//alternate onload method for the save for later page that retrieves the list of saved game articles from local storage
function OnLoadSFL()
{
    //retrieving list of saved games
    savedGames = JSON.parse(localStorage.getItem("saved"));
    DisplaySaved();
}

//function that allows users to submit their details and displays an appropriate message
function SubmitDetails()
{
    let inName = document.getElementById("inName");
    let inEmail = document.getElementById("inEmail");
    let inPhone = document.getElementById("inPhone");
    let txtMsg = document.getElementById("txtMsg");
    
    alert("Thank you for contacting us "+inName.value+"!\nSubmitted information\n-------------------\nEmail: "+inEmail.value+"\nPhone: "+inPhone.value+"\nMessage: "+txtMsg.value);
}

//function that records each additional like for a game
function AddLike()
{
    //switch case that checks which game is selected
    switch(String(localStorage.getItem("gameName")))
    {
        case "Rust":
            if(localStorage.getItem("rustLikes") === null)
            {
                alert("First like for rust");
                localStorage.setItem("rustLikes", 1);
            }
            else
            {
                localStorage.setItem("rustLikes", (1+Number(localStorage.getItem("rustLikes"))));
                alert("Rust liked!\nLikes: "+Number(localStorage.getItem("rustLikes")));
                $('#lblLikes').text("Likes: "+Number(localStorage.getItem("rustLikes")));
            }
            break;
        case "Counter-strike: Global Offensive":
            if(localStorage.getItem("csgoLikes") === null)
            {
                alert("First like for csgo");
                localStorage.setItem("csgoLikes", 1);
            }
            else
            {
                localStorage.setItem("csgoLikes", (1+Number(localStorage.getItem("csgoLikes"))));
                alert("Counter-strike: Global Offensive liked!\nLikes: "+Number(localStorage.getItem("csgoLikes")));
                $('#lblLikes').text("Likes: "+Number(localStorage.getItem("csgoLikes")));
            }
            break;
        case "Minecraft":
            if(localStorage.getItem("minecraftLikes") === null)
            {
                alert("First like for minecraft");
                localStorage.setItem("minecraftLikes", 1);
            }
            else
            {
                localStorage.setItem("minecraftLikes", (1+Number(localStorage.getItem("minecraftLikes"))));
                alert("Minecraft liked!\nLikes: "+Number(localStorage.getItem("minecraftLikes")));
                $('#lblLikes').text("Likes: "+Number(localStorage.getItem("minecraftLikes")));
            }
            break;
        case "Grand Theft Auto V":
            if(localStorage.getItem("gtaLikes") === null)
            {
                alert("First like for gta");
                localStorage.setItem("gtaLikes", 1);
            }
            else
            {
                localStorage.setItem("gtaLikes", (1+Number(localStorage.getItem("gtaLikes"))));
                alert("Grand Theft Auto V liked!\nLikes: "+Number(localStorage.getItem("gtaLikes")));
                $('#lblLikes').text("Likes: "+Number(localStorage.getItem("gtaLikes")));
            }
            break;
        default:
            alert(String(localStorage.getItem("gameName"))+" not found!");
            break
    }
}

//function that allows users to post comments about a game
function PostComment()
{
    let inName = document.getElementById('inCommentName');
    let inComment = document.getElementById('inComment');

    let name = inName.innerHTML, comment = inComment.innerHTML;

    let commentPar  = $('<p></p>');
    commentPar.addClass('comment-style');
    $(commentPar).text(name+": "+comment);
    $('#frmComments').append(comment);
}

//function that creates a drop down list of countries to choose from 
function CreateDropdown()
{
    $('#dropdownDiv').append($('<select id="ddlCountry" style="font-size:large; color:red;"><select>'));

    for(let x = 0; x < countries.length; x++)
    {
        /*CODE REFERENCED FROM
        https://stackoverflow.com/questions/740195/adding-options-to-a-select-using-jquery
        */
        $('#ddlCountry').append($('<option>', {value: x, text: countries[x]}));
    }
}

//functionn that displays saved games and their information in a list
function DisplaySaved()
{
    var game;
    let genreStr = "";
    ulSaved = document.getElementById("ulSaved");

    for(let x = 0; x < savedGames.length; x++)
    {
        for(let y = 0;  y < savedGames[x].genres.length; y++)
        {
            genreStr += savedGames[x].genres[y];
            if(y != (savedGames[x].length - 1))
            {
                genreStr += " - "
            }
        }

        game = document.createElement('li');
        game.innerHTML = "Name: "+savedGames[x].name+"<br>Description: "+savedGames[x].desc+"<br>Price: "+savedGames[x].price+"Sales: "+savedGames[x].grossSales+"<br>Genres: "+genreStr+"<br><br>";
        game.className = "paragraph-hover";
        ulSaved.appendChild(game);
    }

    //styling effects that trigger when the page is interacted with

    $("ulSaved").ready(function(){
        $(".paragraph-hover").hide().fadeIn(2000).slideToggle().slideToggle();
    });
    

    $("li").hover(function(){
        $("li.paragraph-hover").css('font-style', 'italic');
    });

    alert("running");

}


$('#btnSave').click(function(){

    //retrieving list of saved games
    savedGames = JSON.parse(localStorage.getItem("saved"));

    //linking to HTML elements
    let gameName = document.getElementById("gameName");
    //alert(gameName.innerHTML);    
    let gameDesc = document.getElementById("gameDesc");
    let priceRow = document.getElementById("tblPriceData");
    let salesRow = document.getElementById("tblSalesData");
    let genresRow = document.getElementById("tblGenresData");

    /* CODE REFERENCED FROM
        https://stackoverflow.com/questions/35810238/how-to-remove-nbsp-by-javascript
    */
    let name = String(gameName.innerHTML).replace(/\&nbsp;/g, ' ');
    let desc = String(gameDesc.innerHTML).replace(/\&nbsp;/g, ' ');
    let price = String(priceRow.innerHTML).replace(/\&nbsp;/g, ' ');
    let sales = String(salesRow.innerHTML).replace(/\&nbsp;/g, ' ');
    let genres = String(genresRow.innerHTML).replace(/\&nbsp;/g, ' ');

    genres = SplitString(genres);

    alert("Creating object...\n\nName: "+name+"\nDesc: "+desc+"\nPrice: "+price+"\nSales: "+sales+"\nGenres: "+genres.length);
    let newGame = new CreateGame(name, desc, price, sales, genres);

    savedGames.push(newGame);
    localStorage.setItem("saved", JSON.stringify(savedGames));
    alert(name+" saved!\nSaved articles: "+savedGames.length);
});

//constructor method that creates a new game object
function CreateGame(name, desc, price, grossSales, genres)
{
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.grossSales = grossSales;
    this.genres = genres;
}

//function that splits a string into a string array using a delimeter
function SplitString(string)
{
    alert("SPLITTING\n"+string);
    let splitString = String(string).split('-');

    for(let x  = 0; x < splitString.length; x++)
    {
        splitString[x] = splitString[x].trim();
    }

    return splitString;
}