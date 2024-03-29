const easy = document.querySelector("#easy")
const hard = document.querySelector("#hard")
const DIFICULTAD = document.querySelectorAll("#dificultad>button")
const divs = document.querySelectorAll(".container>div");
const colorDisplay = document.querySelector("#colorDisplay");
const mensaje = document.querySelector("#message");
const H1 = document.querySelector("h1");
const nuevosColores = document.querySelector("#stripe>button");
let colors = randomColors(+hard.value);
let pickedColor = pickColor();
let clickedColor

function randomRGB (){
    let rand1 = Math.floor(Math.random()*255)
    let rand2 = Math.floor(Math.random()*255)
    let rand3 = Math.floor(Math.random()*255)
    return `rgb(${rand1}, ${rand2}, ${rand3})`
}

function randomColors(dificultad){
    let colors = [];
    for(i=0; i< dificultad; i++){
        colors.push(randomRGB())
    }
    return colors
}

function changeColor (colorGanador) {
    divs.forEach((div) => {
        div.style.backgroundColor = colorGanador
    })
}

function pickColor (){
    let randomNumber = Math.floor(Math.random()*(colors.length));
    return colors[randomNumber]
}

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = randomColors(+easy.value);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    mensaje.textContent = "";
    H1.style.color = "";
    for(let i = 3; i < divs.length; i++){
        divs[i].classList.add("hidden")
    }
    game()
})

hard.addEventListener("click", function() {
    colors = randomColors(+hard.value);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    mensaje.textContent = "";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    H1.style.color = "";
    for(let i = 3; i < divs.length; i++){
        divs[i].classList.remove("hidden")
    }
    game();
})

function game(){
    for(let i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = colors[i];
        let tempDiv = divs[i]
        divs[i].addEventListener("click", function () {
            clickedColor = this.style.backgroundColor;
            if(clickedColor == pickedColor){
                mensaje.textContent = "Correcto!";
                H1.style.color = pickedColor;
                changeColor(pickedColor);
                nuevosColores.textContent = "Jugar de nuevo!"
            }else{
                tempDiv.style.backgroundColor = "#232323";
                mensaje.textContent = "Volvé a intentarlo";
            }
        })
    };
};

colorDisplay.textContent = pickedColor

nuevosColores.addEventListener("click", function (){
    colors = randomColors(+hard.value);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    mensaje.textContent = ""
    hard.classList.add("selected")
    easy.classList.remove("selected")
    H1.style.color = "" 
    for(let i = 3; i < divs.length; i++){
        divs[i].classList.remove("hidden")
    }
    game()
})

game()