let click = document.getElementById('hover');
let img = document.querySelector('.invis')

click.onclick = function(){
    document.body.style.background = "white";
    document.body.style.color = "black";
    img.style.visibility = "visible";
}