let colors = ["rgb(205, 92, 92)", "rgb(128, 128, 0)", "rgb(0, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 0, 128)"];
let divs = document.querySelectorAll(".container>div");
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = colors[0];
let mensaje = document.querySelector("#message");

for(let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = colors[i];
    let clickedColor = divs[i].style.backgroundColor
    let tempDiv = divs[i]
    divs[i].addEventListener("click", (e) =>{
        if(clickedColor == pickedColor){
            alert("ADIVINASTE!")
        }else{
            tempDiv.style.backgroundColor = "#232323";
            mensaje.textContent = "Volvé a intentarlo";
        }
    })
};

colorDisplay.textContent = pickedColor
