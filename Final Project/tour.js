console.log('hello!');

  document.getElementById('webpage').addEventListener("click",goWebsite);
  function goWebsite(){
     window.open('https://illenium.com/');
     console.log('clicked');
  };


const ticketlinks= ["https://fallenemberstour.com/?waitlist=610061703c2c2e00d110030f","https://www.ticketmaster.com/event/06005AF30C4D45E6","https://lightsallnight.com/","https://hijinxfest.com/","https://www.ticketmaster.com/event/15005B5B88B6157A","https://www.ticketmaster.com/event/15005B5B88B6157A","https://ultramusicfestival.com/","https://www.hangoutmusicfest.com/","https://www.lollaparis.com/"];


document.getElementById('tic1').addEventListener("click",goTickets1);
function goTickets1(){
   window.open(ticketlinks[0]);
   console.log('clicked');
};

document.getElementById('tic2').addEventListener("click",goTickets2);
function goTickets2(){
   window.open(ticketlinks[1]);
   console.log('clicked');
};

document.getElementById('tic3').addEventListener("click",goTickets3);
function goTickets3(){
   window.open(ticketlinks[2]);
   console.log('clicked');
};

document.getElementById('tic4').addEventListener("click",goTickets4);
function goTickets4(){
   window.open(ticketlinks[3]);
   console.log('clicked');
};

document.getElementById('tic5').addEventListener("click",goTickets5);
function goTickets5(){
   window.open(ticketlinks[4]);
   console.log('clicked');
};

document.getElementById('tic6').addEventListener("click",goTickets6);
function goTickets6(){
   window.open(ticketlinks[5]);
   console.log('clicked');
};

document.getElementById('tic7').addEventListener("click",goTickets7);
function goTickets7(){
   window.open(ticketlinks[6]);
   console.log('clicked');
};

document.getElementById('tic8').addEventListener("click",goTickets8);
function goTickets8(){
   window.open(ticketlinks[7]);
   console.log('clicked');
};

document.getElementById('tic9').addEventListener("click",goTickets9);
function goTickets9(){
   window.open(ticketlinks[8]);
   console.log('clicked');
};
