var time = 60;
var score = 0;
var randomNum;
var userName;

userName = prompt(`Enter your name to start the game`);
alert(`lets see "${userName}" What score you'll get in 60s`);
function bubbles() {
  var clutter = "";
  for (let i = 0; i <= 103; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">${rn}</div>`;

    document.querySelector(".pnl-btm").innerHTML = clutter;
  }
}


function TimeChanger() {
 var Timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    } 
   
    
    else {
       clearInterval(Timer);
      alert("Time's Up.You Looseee...");
      alert("Refresh for new game");
    }
  }, 1000);
}

  

function newHitVal() {
 randomNum =  Math.floor(Math.random()*10);
  document.querySelector("#hitvar").textContent = randomNum;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scorevar").textContent = score;
}

document.querySelector(".pnl-btm").addEventListener("click",function(dets) {
      clickedNumber = Number(dets.target.textContent);
      if (randomNum != clickedNumber) {
          alert("Nope..Try Again");
      } else{
        increaseScore();
        alert("Congratulations...!You choosed right");
        newHitVal();
        bubbles();
      }
      
})

bubbles();
TimeChanger();
newHitVal();