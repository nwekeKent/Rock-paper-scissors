const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const restart = document.querySelector('#restart-btn');
const result = document.querySelector('#result');
const modal = document.querySelector('.modal-div');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');


let player = playerScore.innerText;
let computer = computerScore.innerText;



function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getcomputerchoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

}



function getcomputerchoice() {
    const rand = Math.floor(Math.random() * 10);

    if (rand < 4) {
        return 'rock';
    } else if (rand <= 8) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (playerChoice === 'rock') {

        if (computerChoice === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerChoice === 'paper') {

        if (computerChoice === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        player++;
        playerScore.innerText = player
        result.innerHTML = ` 
        <h1 class="display-4 text-success">You Win</h1>
        <div class="result-choice mb-3"> <i class=" choice fa fa-hand-${computerChoice}-o fa-5x"></i></div>
        <p class="lead">Computer Picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;
    } else if (winner === 'computer') {
        computer++;
        computerScore.innerText = computer
        result.innerHTML = ` 
        <h1 class="display-4 text-danger">You Lose</h1>
        <div class="result-choice mb-3"> <i class=" choice fa fa-hand-${computerChoice}-o fa-5x"></i></div>
        <p class="lead">Computer Picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;

    } else {
        result.innerHTML = ` 
        <h1 class="display-4 text-dark">It's A Draw</h1>
        <div class="result-choice mb-3"> <i class=" choice fa fa-hand-${computerChoice}-o fa-5x"></i></div>
        <p class="lead">Computer Picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;
    }

    showmodal();
    setTimeout(closemodal, 1500);

}

function showmodal() {
    modal.style.display = 'block';


}

function closemodal() {
    modal.style.display = 'none';
}

choices.forEach(choice => {
    choice.addEventListener('click', play)

});

restart.addEventListener('click', () => {
    player = 0
    computer = 0
    playerScore.innerText = 0;
    computerScore.innerText = 0;
})