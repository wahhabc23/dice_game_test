var randomNumber=Math.floor((Math.random()*6+1));
var randomNumber1=Math.floor((Math.random()*6+1));
if(randomNumber==1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if(randomNumber==2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if(randomNumber==3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if(randomNumber==4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if(randomNumber==5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else{
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
if(randomNumber1==1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if(randomNumber1==2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if(randomNumber1==3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if(randomNumber1==4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if(randomNumber1==5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else{
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if(randomNumber==randomNumber1)
{
  document.querySelector("h1").textContent="Tie";

}else if (randomNumber>randomNumber1) {

    document.querySelector("h1").textContent="Player 1 Wins";
}else{
  document.querySelector("h1").textContent="Player 2 Wins";
  
setTimeout(function(){
  document.querySelector("h1").textContent="Refresh Me";},5000);
}
