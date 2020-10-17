function showMenu() {
    var x = document.getElementById("topnav");
    if (x.className === "base") {
        x.className += " responsive";
    } else {
        x.className = "base";
    }
}
