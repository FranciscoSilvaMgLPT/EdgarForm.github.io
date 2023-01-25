// document.getElementById("ClickButton").addEventListener("click", () => {
//   document.getElementById("ClickButton").style.backgroundColor = color;

//   colorTurn();
// });

// let age;



// function colorTurn() {
//   if (color === "red") {
//     color = "blue";
//   }
//   if (color === "blue") {
//     color = "green";
//   }
//   if (color === "green") {
//     color = "red";
//   }
// }

document.getElementById("rangeJS").addEventListener("change", () =>{
    document.getElementById("ageJS").innerHTML = document.getElementById("rangeJS").value;
});

