let divContainer = document.querySelector(".container");
let btn = document.querySelector(".reset");
btn.addEventListener("click", () => {
   let squaresPerSide;
   do {
  squaresPerSide = Number(prompt("Enter squares per side (max 100):"));
    } while (isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide <= 0);
createGrid(squaresPerSide);
   
})



function createGrid(squaresPerSide)
{
    divContainer.innerHTML = "";
    let squareSize = 960/squaresPerSide;
    for(let i = 0; i < squaresPerSide*squaresPerSide; i++)
{
    let divCreate = document.createElement("div");
    divCreate.style.width = squareSize + "px";
    divCreate.style.height = squareSize + "px";
    divCreate.addEventListener("mouseenter", () => {
        divCreate.style.backgroundColor = getRandomColor();
        
    })
    divContainer.appendChild(divCreate);
    
}

}
createGrid(16);

function getRandomColor()
{
   let x = Math.floor(Math.random()*256);
   let y = Math.floor(Math.random()*256);
   let z = Math.floor(Math.random()*256);
   return `rgb(${x}, ${y}, ${z})`;
}