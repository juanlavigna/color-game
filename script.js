let colors = ["rgb(205, 92, 92)", "rgb(128, 128, 0)", "rgb(0, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 0, 128)"];
let divs = document.querySelectorAll(".container>div");
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = colors[1];

for(let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = colors[i];
    let clickedColor = divs[i].style.backgroundColor
    divs[i].addEventListener("click", () =>{
        if(clickedColor == pickedColor){
            alert("ADIVINASTE!")
        }
    })
};

// divs.forEach((div) => {
//     div.addEventListener("click", (e) =>{
//         let clickedColor = e.style.backgroundColor
//         if(pickedColor == clickedColor){
//             alert("asertaste")
//         }else{
//             alert("perdiste")
//         }
//     })
// })

colorDisplay.textContent = pickedColor
