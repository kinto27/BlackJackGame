
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "User",
  chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  isAlive = true;
  renderGame();
  chips = 200
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to pick another card?";
  } else if (sum === 21) {
    message = "You win!";
    hasBlackjack = true;
    chips += 10;
  } else {
    message = "You are out of the game";
    isAlive = false;
    chips -= 5;
    
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}

