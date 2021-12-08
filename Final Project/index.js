console.log('hello!');


let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('trilogy').innerHTML += "<div class='pimage'><img src='assets/trilogy/" + pic + ".jpeg'" + "class='portfoliopic' id='tpic" + pic+ "' /><div class='overlay'></div>";
document.getElementById('redrocks').innerHTML += "<div class='pimage'><img src='assets/redrocks/" + pic + ".jpeg'" + "class='portfoliopic' id='rpic" + pic+ "' /><div class='overlay'></div>";
document.getElementById('sanfran').innerHTML += "<div class='pimage'><img src='assets/sanfran/" + pic + ".jpeg'" + "class='portfoliopic' id='spic" + pic+ "' /><div class='overlay'></div>";
}


let displaytrilogy = false;
document.getElementById('trilogy').addEventListener("click", displayTrilogy);
function displayTrilogy(){
  document.getElementById('moretrilogy').style.display = "block";
  document.getElementById('showtrilogy').style.display = "block";
  let overlay = document.getElementById('showtrilogy');
  overlay.addEventListener("click", clickedTriggerT);
  displaytrilogy = true;
}

function clickedTriggerT(e){
  if(e.target.id != "moretrilogy" && displaytrilogy == true){
    document.getElementById('moretrilogy').style.display = "none";
    document.getElementById('showtrilogy').style.display = "none";
    displaytrilogy = false
  }else{
    displaytrilogy = true;
  }
  console.log('clicked');
  console.log(e.target.id);
}

let displayred = false;
document.getElementById('redrocks').addEventListener("click", displayRed);
function displayRed(){
  document.getElementById('morered').style.display = "block";
  document.getElementById('showred').style.display = "block";
  let overlay1 = document.getElementById('showred');
  overlay1.addEventListener("click", clickedTriggerR);
  displayred = true;
}

function clickedTriggerR(r){
  if(r.target.id != "morered" && displayred == true){
    document.getElementById('morered').style.display = "none";
    document.getElementById('showred').style.display = "none";
    displayred = false
  }else{
    displayred = true;
  }
  console.log('clicked');
  console.log(r.target.id);
}

let displaysf = false;
document.getElementById('sanfran').addEventListener("click", displaySan);
function displaySan(){
  document.getElementById('moresf').style.display = "block";
  document.getElementById('showsf').style.display = "block";
  let overlay2 = document.getElementById('showsf');
  overlay2.addEventListener("click", clickedTriggerS);
  displaysf = true;
}

function clickedTriggerS(s){
  if(s.target.id != "moresf" && displaysf == true){
    document.getElementById('moresf').style.display = "none";
    document.getElementById('showsf').style.display = "none";
    displaysf = false
  }else{
    displaysf = true;
  }
  console.log('clicked');
  console.log(s.target.id);
}
