console.log("Wlcm to TTT")

let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

//FUNCTION FOR TURN
const changeTurn = function(){
    return turn === "X"?"0" : "X"
};

// FUNCTION TO CHECK FOR A WIN
const checkWin = function(){
let boxtexts = document.getElementsByClassName("boxtext");


 
let wins = [
    [0, 1, 2, 0, 4.5, 0],
    [3, 4, 5, 0, 14.5, 0],
    [6, 7, 8, 0, 24.5, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 14.5, 45],
    [2, 4, 6, 0.1, 14.7, -45]
]

  wins.forEach(function(e){
  if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
  document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won"
  isgameover = true;
  document.getElementById("gif").style.width = "150px";
  gameover.play();
  gameover.loop = true;
  document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
  }

})  
  }                

//GAME LOGIC

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function(element){                                                                                                                                           
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
             document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})


//RESET BUTTON

reset.addEventListener('click', function(){
    let boxtext = document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(function(e){
e.innerText = ""
})
turn = "X";
 isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.getElementById("gif").style.width = "0px";
    gameover.pause();
    document.querySelector(".line").style.width = "0vw";
})

