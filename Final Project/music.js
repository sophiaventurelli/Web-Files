console.log('hello!');

document.getElementById("ashes").onclick = function(){
    var audio = document.getElementById("sleepwalker");
    if (audio.paused) audio.play();
    else audio.pause();
};

document.getElementById("awake").onclick = function(){
    var audio = document.getElementById("crawl");
    if (audio.paused) audio.play();
    else audio.pause();
};

document.getElementById("ascend").onclick = function(){
    var audio = document.getElementById("holdon");
    if (audio.paused) audio.play();
    else audio.pause();
};

document.getElementById("embers").onclick = function(){
    var audio = document.getElementById("blame");
    if (audio.paused) audio.play();
    else audio.pause();
};

document.getElementById('webpage').addEventListener("click",goWebsite);
function goWebsite(){
   window.open('https://illenium.com/');
   console.log('clicked');
}
