const flags = document.getElementsByClassName("flag");
for (let i = 0; i < 3; i++) {
    flags[i].style.filter = "grayscale(0%)";
    flags[i].style.cursor = "pointer";
    flags[i].addEventListener("click", () => picklang(flags[i]));
}

function picklang(image) {   
    for (let i = 0; i < 3; i++) {
        flags[i].style.filter = "grayscale(100%)";
    }
    image.style.filter = "grayscale(0%)";
}