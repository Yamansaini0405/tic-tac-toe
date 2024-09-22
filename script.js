let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn")
let msgConatiner = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText ="X"
            turnO = true;
        }
        box.disabled = true;

        chechWinner();
    })
})

resetBtn.addEventListener("click", ()=> {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    msgConatiner.classList.add("hide");
    
})

newGameBtn.addEventListener("click", ()=> {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    msgConatiner.classList.add("hide");
    

})

const disabledBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText =`Congratulation, Player${winner} wins`;
    msgConatiner.classList.remove("hide");
}

const chechWinner = () => {
    for(pattern of winPattern){
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != "") {
            if(posval1 === posval2 && posval2 === posval3 ) {
                showWinner(posval1);
                disabledBtn();
            }
        }
        
    }
}

