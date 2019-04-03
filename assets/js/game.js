// varibles
let gameSelection=Math.floor(Math.random()*102)+19;
let cystal1=Math.floor(Math.random()*12)+1;
let cystal2=Math.floor(Math.random()*12)+1;
let cystal3=Math.floor(Math.random()*12)+1;
let cystal4=Math.floor(Math.random()*12)+1;
let userScore=0;
let wins=0;
let losses=0;
const winsText=$("#wins-text");
const lossesText=$("#losses-text");
const targetText=$("#target-text");
const scoreText=$("#score-text");



//functions
//restart game/ reset gameSelection and crystals and user score/reset html/
//onclick add crystal value to user score and check for win or loss/



//logic
targetText.text(gameSelection)
$("#crys1").attr("data-val",crystal1);
$("#crys2").attr("data-val",crystal2);
$("#crys3").attr("data-val",crystal3);
$("#crys4").attr("data-val",crystal4);





