const form = document.querySelector(".forms")
const mask = document.querySelector(".form-mask")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function cliqueiNaMascara(){
    form.style.left = "-300px"
    mask.style.visibility = "hidden"
    form.style.transform = "translateX(0)"
 }
 