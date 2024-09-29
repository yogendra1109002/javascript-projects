let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "seassors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];    
};

const drawGame = () => {
    console.log("The game was deow.")
    msg.innerText = "Game was Draw , Play again";
    document.querySelector("#msg").style.backgroundColor = "black";

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { 
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerText = `You win!, your ${userChoice} beat ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor = "green";
    } else { 
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerText = `You lose!, ${userChoice} beat your ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor = "Red";
    }
}

const playGame =(userChoice) =>{
    console.log("User Choice is =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice is =", compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice ==="paper") {
            userWin = compChoice === "seassors"? false : true;
            
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});