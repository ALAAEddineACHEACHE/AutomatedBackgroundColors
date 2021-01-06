const colors = ["YELLOW","RED","RGB(133,122,200)","#f15025","#88ff00","fuchsia","Seagreen","Aqua","Cornflowerblue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
     const randomNumber = getRandomNumber();
     console.log(randomNumber);
     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber];
}) ;
function getRandomNumber(){
     return Math.floor(Math.random()*colors.length);
}
