function toggleBtn() {
    var x = document.getElementsByClassName("navlinks")[0];
    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}