// varibles
let gameSelection=Math.floor(Math.random()*102)+19;
let crystal1=Math.floor(Math.random()*12)+1;
let crystal2=Math.floor(Math.random()*12)+1;
let crystal3=Math.floor(Math.random()*12)+1;
let crystal4=Math.floor(Math.random()*12)+1;
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
const resetGame=()=>{
 gameSelection=Math.floor(Math.random()*102)+19;
 crystal1=Math.floor(Math.random()*12)+1;
 crystal2=Math.floor(Math.random()*12)+1;
 crystal3=Math.floor(Math.random()*12)+1;
 crystal4=Math.floor(Math.random()*12)+1;
 userScore=0;
 targetText.text(gameSelection)
 $("#crys1").attr("data-val",crystal1);
 $("#crys2").attr("data-val",crystal2);
 $("#crys3").attr("data-val",crystal3);
 $("#crys4").attr("data-val",crystal4);
scoreText.text(userScore); 

}

$("img").on("click",function(){
    userScore+=parseInt($(this).attr("data-val"));
    scoreText.text(userScore);
    if(userScore===gameSelection){
        wins++
        winsText.text(wins);
        resetGame()
    }
    if(userScore>gameSelection){
    losses++
        lossesText.text(losses);
        resetGame()
    }

});

//logic
targetText.text(gameSelection)
$("#crys1").attr("data-val",crystal1);
$("#crys2").attr("data-val",crystal2);
$("#crys3").attr("data-val",crystal3);
$("#crys4").attr("data-val",crystal4);





