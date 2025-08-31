var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel_popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addmovie = document.getElementById("add-movie");
var movietitleinput = document.getElementById("movie-title-input");
var moviedirectorinput = document.getElementById("movie-director-input");
var moviedescriptioninput = document.getElementById("movie-description-input");

addmovie.addEventListener("click", function (event) {
    event.preventDefault();
    
    var div = document.createElement("div");
    div.setAttribute("class", "movie-container");
    div.innerHTML = `
        <h2>${movietitleinput.value}</h2>
        <h3>${moviedirectorinput.value}</h3>
        <h5>${moviedescriptioninput.value}</h5>
    `;

    container.append(div);

    // Clear inputs after adding
    movietitleinput.value = "";
    moviedirectorinput.value = "";
    moviedescriptioninput.value = "";

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
