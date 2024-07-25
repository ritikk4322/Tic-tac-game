let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgClass=document.querySelector(".showmsg");


let turnO= true;

const winningPattern= [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{ 
        if(turnO){
            box.innerText = "X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });

});

const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
           showWinner(pos1val);
        }
    }
    }
}

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const anableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
     msg.innerText=`Congratulation, Winner is ${winner}`;
     msgClass.classList.remove("hide");
     disableBtn();
}

const resetGame=()=>{
    turnO= true;
    anableBtn();
    msgClass.classList.add("hide");

}

newGame.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" ,resetGame);