function show() {
    document.querySelector(".menu").style.marginRight = "0px";
    document.querySelector(".menu").style["boxShadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.5)";
}
function hide() {
    document.querySelector(".menu").style.marginRight = "-145px";
    document.querySelector(".menu").style["boxShadow"] = "none";
}

var element = document.querySelector("#Theme");
element.onclick = function(){
    document.body.classList.toggle("Light-Theme");
    if (document.body.classList.contains("Light-Theme")) {
        element.className = 'fa fa-moon-o';
    }
    else
    {
        element.className = 'fa fa-sun-o';
    }
}