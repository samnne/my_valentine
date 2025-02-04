let the_gif = document.getElementById("the_gif");

let yes = document.getElementById("yes");

let no = document.getElementById("no");

let y_n = "ponder";



yes.addEventListener("click",
function(event) {
    event.preventDefault();
    y_n = "yes";
    change_gif();
});



no.addEventListener("click", 
function(event) {
    event.preventDefault();
    y_n = "no";
    change_gif();
});



function change_gif() {
    if (y_n == "yes") {
        the_gif.src = "img/happy.gif";
    } else if (y_n == "no") {
        the_gif.src = "img/sad.gif";
    } else {
        the_gif.src = "img/pondering.gif";
    }
}



