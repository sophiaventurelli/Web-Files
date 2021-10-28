let daylabels = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let menus = ["monmenu.jpg","tuemenu.jpg","wedmenu.jpg","thumenu.jpg","frimenu.jpg","satmenu.jpg","sunmenu.jpg"];
let images = ["monpic.jpg","tuepic.jpg","wedpic.jpg","thupic.jpg","fripic.jpg","satpic.jpg","sunpic.jpg"];
let quotes = ["Hey, I know it’s Monday. But it’s also a new day and a new week. And in that lies a new opportunity for something special to happen", "Tuesday isn’t so bad. It’s a sign that I’ve somehow survived Monday.","Wednesdays are like Mondays in the middle of the week!","Some people call it Thursday, I like to call it Friday Eve.","It’s Friday! Time to go make stories for Monday.","I told myself that I was going to live the rest of my life as if it were Saturday.","Sunday is a time when you sit back and reflect on all the blessings that you have received. Smile at all the good things that you are enjoying."]

document.getElementById("monday").addEventListener('click', mondayActive);
function mondayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[0];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[0] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[0] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[0] + "</h3>";
}

document.getElementById("tuesday").addEventListener('click', tuesdayActive);
function tuesdayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[1];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[1] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[1] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[1] + "</h3>";
}

document.getElementById("wednesday").addEventListener('click', wednesdayActive);
function wednesdayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[2];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[2] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[2] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[2] + "</h3>";
}

document.getElementById("thursday").addEventListener('click', thursdayActive);
function thursdayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[3];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[3] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[3] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[3] + "</h3>";
}

document.getElementById("friday").addEventListener('click', fridayActive);
function fridayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[4];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[4] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[4] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[4] + "</h3>";
}

document.getElementById("saturday").addEventListener('click', saturdayActive);
function saturdayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[5];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[5] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[5] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[5] + "</h3>";
}

document.getElementById("sunday").addEventListener('click', sundayActive);
function sundayActive(){
  document.getElementById("daychosen").innerHTML= daylabels[6];
  document.getElementById("menu").innerHTML= "<img src= 'assets/" + menus[6] + "' >";
  document.getElementById("image").innerHTML= "<img src= 'assets/" + images[6] + "' >";
  document.getElementById("quote").innerHTML= "<h3>" + quotes[6] + "</h3>";
}
