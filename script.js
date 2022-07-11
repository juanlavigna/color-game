let colors = ["rgb(205, 92, 92)", "rgb(128, 128, 0)", "rgb(0, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 0, 128)"];
let divs = document.querySelectorAll(".container>div");
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = pickColor();
let mensaje = document.querySelector("#message");
let H1 = document.querySelector("h1");

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
        }else{
            tempDiv.style.backgroundColor = "#232323";
            mensaje.textContent = "Volvé a intentarlo";
        }
    })
};

colorDisplay.textContent = pickedColor
