//Tic Tac Toe Game
let boxes = document.querySelectorAll(".box");//to select all boxes //!!!!this also returns in the form of an array
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//Players name are X and O. they will have alternate turns

let turn0 = true;//PlayerX and PlayerY //if this value is true, we will have 0 printed on the box

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => { //arrowfuncion
    box.addEventListener("click",()=>{
        if(turn0 === true){ //player0 turn
            box.innerText = "O";
            turn0 = false;

        }else{     //playerX turn
            box.innerText ="X";
            turn0 = true;            //Pro-tip , when there are just two alternates, 
                                     // you only need to change value for one of them for clean-code
        }
        box.disabled = true;//once 1 value is locked in the box,disable the button
        checkWinner();
    })

})

const resetGame =()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner)=> {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){
       
        let pos1Val = boxes[pattern[0]].innerText;//fetch elements from the inside array
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        //Now,first we have to check that no value is empty
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);

            }
        }
        
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
