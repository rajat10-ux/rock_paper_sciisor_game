let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const gencompchoice=()=>{
const options=["rock","paper","scissors"];
let ans=' ';
 return options[Math.floor(Math.random()*3)];
}
const drawgame=()=>{
        console.log("game was draw");
        msg.innerText="game is draw";
}
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const showWinner=(userwin,userChoice,compchoice)=>{
        if(userwin){
                userScore++;
                userScorepara.innerText=userScore;
                msg.innerText=`you win! your ${userChoice} beats ${compchoice}`
                msg.style.backgroundColor="green";
        }
        else{
                compScore++;
                compScorepara.innerText=compScore;
                msg.innerText=`you lost! ${compchoice} beats your ${userChoice}`
             msg.style.backgroundColor="red";
        }
}
const playgame=(userchoice)=>{
console.log("user chocie=",userchoice);
const compchoice=gencompchoice();
console.log("comp chocie=",compchoice);
if(userchoice==compchoice){
drawgame();
}
else{
 let userwin=true;
 if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
 }
 else if(userchoice==="paper"){
        userwin=compchoice==='scissors'?false:true;
 }
 else{
        userwin=compchoice==='rock'?false:true;
 }
 showWinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
        // console.log(choice);
        const userChoice=choice.getAttribute("id");
        choice.addEventListener("click",()=>{
//  console.log("chocie was clickes",userChoice);
 playgame(userChoice);
        });
});