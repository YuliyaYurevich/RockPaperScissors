const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const stone = document.querySelector('.stone');

const btn = document.querySelectorAll('.btn');

const main = document.querySelector('.game-container');

const arrOptions = ['Paper', 'Scissors', 'Stone'];
let winner = '';

btn.forEach((buttonClicked) => {
  buttonClicked.addEventListener('click', (e) => {
    const clicked = e.target.textContent;

    const randomChoice =
      arrOptions[Math.floor(Math.random() * arrOptions.length)];

    if (randomChoice === clicked) {
      winner = 'No one wins';
    }

    if (randomChoice === 'Paper' && clicked === 'Stone') {
      winner = 'Computer won!';
    }

    if (randomChoice === 'Paper' && clicked === 'Scissors') {
      winner = 'You won!';
    }

    if (randomChoice === 'Scissors' && clicked === 'Paper') {
      winner = 'Computer won!';
    }

    if (randomChoice === 'Scissors' && clicked === 'Stone') {
      winner = 'You won!';
    }

    if (randomChoice === 'Stone' && clicked === 'Paper') {
      winner = 'You won!';
    }

    if (randomChoice === 'Stone' && clicked === 'Scissors') {
      winner = 'Computer won!';
    }

    let message = document.createElement('div');

    message.classList.add('winner');
    message.innerHTML = `${winner}`;
    main.appendChild(message);
    setTimeout(() => {
      message.style.display = 'none';
    }, 1000);

    console.log(randomChoice, clicked, winner);
  });
});
