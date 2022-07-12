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
let easy = document.querySelector("#easy")
let hard = document.querySelector("#hard")
let colors = randomColors(+hard.value);
let divs = document.querySelectorAll(".container>div");
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = pickColor();
let mensaje = document.querySelector("#message");
let H1 = document.querySelector("h1");
let nuevosColores = document.querySelector("#stripe>button");

function changeColor (colorGanador) {
    divs.forEach((div) => {
        div.style.backgroundColor = colorGanador
    })
}

function pickColor (){
    let randomNumber = Math.floor(Math.random()*(colors.length));
    return colors[randomNumber]
}

for(let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = colors[i];
    let clickedColor = divs[i].style.backgroundColor
    let tempDiv = divs[i]
    divs[i].addEventListener("click", (e) =>{
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

colorDisplay.textContent = pickedColor


nuevosColores.addEventListener("click", function (){
    document.location.reload()
})

easy.addEventListener("click", function() {
    
})
