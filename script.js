"use strict";



// document.querySelector(".message").textContent='😃 Correct Number!';

// document.querySelector(".number").textContent='13';
// document.querySelector(".score").textContent='10';

// document.querySelector(".guess").value='23'

let secretNumber=Math.trunc(Math.random() *20+1);
let score=20;
let highscore=0;
document.querySelector(".check").addEventListener("click", function() {
    
    const guess=Number (document.querySelector(".guess").value);

    console.log(guess);

if(!guess){
    messagefunction('😉 No Number');
}else if(guess===secretNumber){
    messagefunction('😎 Correct Number');
    document.querySelector('body').style.backgroundColor='darkgreen';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretNumber;
    if(score>highscore ){
        document.querySelector(".highscore").textContent=score;
        
    }
    

}else if(score>1){
    messagefunction(guess>secretNumber?'😐 Too Hight':'🤔 Too Low');
score--;
document.querySelector(".score").textContent=score;
}else{
    messagefunction('😐 You lost');
    document.querySelector(".score").textContent=0;
} 

})
// if(guess<secretNumber){
//     if(score>1) {
//         document.querySelector(".message").textContent='🤔 Too Low';
//      score--;
//  document.querySelector(".score").textContent=score;
//  }else{
//     document.querySelector(".message").textContent='🤔 You lost';
//     document.querySelector(".score").textContent=0;
//  }

 
let messagefunction=function(message){
    document.querySelector(".message").textContent=message;
}
 






document.querySelector(".btn-again").addEventListener("click",function(){
    document.querySelector(".guess").value="";
     
    score=20;
    document.querySelector(".score").textContent=score;
    messagefunction('Start guessing...');
    document.querySelector("body"  ).style.backgroundColor="#222"
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.number').textContent="?";
    secretNumber=Math.trunc(Math.random() *20+1);
    
})