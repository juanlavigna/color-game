let colors = ["rgb(205, 92, 92)", "rgb(128, 128, 0)", "rgb(0, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 0, 128)"]

let divs = document.querySelectorAll(".container>div")

for(let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = colors[i]
}
