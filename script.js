const popup = document.getElementById("popup");
const main = document.getElementById("main");
const bgMusic = document.getElementById("bgMusic");

const holdGame = document.getElementById("holdGame");
const holdText = document.getElementById("holdText");
const finalGame = document.getElementById("finalGame");
const finalMsg = document.getElementById("finalMsg");

let flippedCount = 0;
let holdTimer;

// START
function startCelebration(){
  popup.style.display = "none";
  main.classList.remove("hidden");
  bgMusic.play();
}

// GAME 1 – FLIP
function flipCard(card,text){
  if(card.classList.contains("flipped")) return;
  card.classList.add("flipped");
  card.innerText = text;
  flippedCount++;

  if(flippedCount === 3){
    setTimeout(()=>holdGame.classList.remove("hidden"),800);
  }
}

// GAME 2 – HOLD
function startHold(){
  holdTimer = setTimeout(()=>{
    holdText.style.opacity = 1;
  },800);
}
function endHold(){
  clearTimeout(holdTimer);
}

// GAME 3 – FINAL
function startFinalGame(){
  holdGame.classList.add("hidden");
  finalGame.classList.remove("hidden");
}

function finalLove(){
  finalMsg.classList.remove("hidden");
  for(let i=0;i<20;i++){
    createHeart();
  }
}

function createHeart(){
  const h = document.createElement("div");
  h.className = "heartFloat";
  h.innerText = "💖";
  h.style.left = Math.random()*100 + "vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
}

