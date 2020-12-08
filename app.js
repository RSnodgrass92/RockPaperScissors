//player and comp scores
const playerScoreDisplay= document.querySelector("#playerScoreNum");
const compScoreDisplay= document.querySelector("#computerScoreNum");

let playerScore=0;
let compScore=0;


//images
const imgArr=["./images/rockicon.png","./images/papericon.png","./images/scissorsicon.png"]
let leftImgPos=0;
let rightImgPos=0;

// comp display
const leftImg= document.querySelector("#leftimg");
leftimg.addEventListener("click",playerSwitch);

const rightImg = document.querySelector("#rightimg");

let intervalTimer=0;
let gameStared=false;

//buttons 
const startbtn= document.querySelector("#startbtn");
startbtn.addEventListener("click",startGame);

const lockinbtn= document.querySelector("#lockinbtn");
lockinbtn.addEventListener("click",playerLockedIn);

const resetbtn= document.querySelector("#resetbtn");
resetbtn.addEventListener("click",reset);




function playerSwitch()
{
    if (leftImgPos<2)
    {
        leftImgPos++;
        leftImg.src=imgArr[leftImgPos];
    }
    else
    {
        leftImgPos=0;
        leftImg.src=imgArr[leftImgPos];
    }
}

function compSwitchDisplay()
{
    if (rightImgPos<2)
    {
        rightImgPos++;
        rightImg.src=imgArr[rightImgPos];
    }
    else
    {
        rightImgPos=0;
        rightImg.src=imgArr[rightImgPos];
    }
}

function compSwitchActual()
{
    rightImgPos=Math.floor(Math.random()*3);
    console.log(rightImgPos);
    rightImg.src=imgArr[rightImgPos];
}

function checkWinner(){
    if (leftImgPos===0 && rightImgPos===1)
    {
        compScore++;
    }
    else if (leftImgPos===1 && rightImgPos===2)
    {
        compScore++;
    }
    else if (leftImgPos===2 && rightImgPos===0)
    {
        compScore++;
    }
    else if (leftImgPos===0 && rightImgPos===2)
    {
        playerScore++;
    }
    else if (leftImgPos===1 && rightImgPos===0)
    {
        playerScore++;
    }
    else if (leftImgPos===2 && rightImgPos===1)
    {
        playerScore++;
    }

    playerScoreDisplay.innerHTML=playerScore;
    compScoreDisplay.innerHTML=compScore;
}

function reset()
{
    playerScore=0;
    compScore=0;
    playerScoreDisplay.innerHTML=playerScore;
    compScoreDisplay.innerHTML=compScore;
}
function playerLockedIn()
{
    if (gameStarted===true)
    {
        clearInterval(intervalTimer);
        intervalTimer=0;
        compSwitchActual(); 
        checkWinner();
        gameStarted=false;
    }
   
}
function startGame()
{
 gameStarted=true;
 if (intervalTimer===0) 
 {
    
    intervalTimer=setInterval(compSwitchDisplay,125);
 }  

}