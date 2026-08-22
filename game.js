// ======== Game ======== //

let score = 0;
let randomized = [];
let round = 0;
const userScore = document.getElementById("score");

//shuffle array

const shuffledArray = () => {
  // Create a shallow copy to prevent mutating the original array
  const shuffled = [...charactersArray];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements using destructuring assignment
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

let sliced = shuffledArray().slice(round, round + 2);

//create the image - object array
function createImageFrontBack(arrImageFront, arrImageBack, i) {
  // front and back
  const cardFrontBack = document.createElement("div");
  document.getElementById("card-game").appendChild(cardFrontBack);
  cardFrontBack.classList.add("card-game__front-back");
  cardFrontBack.setAttribute("onclick", `compareBounty(${i})`);

  //front
  const cardFront = document.createElement("div");
  const cardImageFront = document.createElement("div");
  const imageFront = document.createElement("img");

  cardFrontBack.appendChild(cardFront);
  cardFront.appendChild(cardImageFront);
  cardImageFront.appendChild(imageFront);
  cardFront.classList.add("card", "--front");
  cardImageFront.classList.add("card-image");
  imageFront.setAttribute("src", arrImageFront);

  //back
  const cardBack = document.createElement("div");
  const cardImageBack = document.createElement("div");
  const imageBack = document.createElement("img");

  cardFrontBack.appendChild(cardBack);
  cardBack.appendChild(cardImageBack);
  cardImageBack.appendChild(imageBack);
  cardBack.classList.add("card", "--back");
  cardImageBack.classList.add("card-image");
  imageBack.setAttribute("src", arrImageBack);
  console.log(cardFrontBack);
}

function getTwoCards(cards) {
  cards.forEach((character, index) => {
    createImageFrontBack(character.imageFront, character.imageBack, index);
  });
}
getTwoCards(sliced);

function hideSlice() {
  const div = document.querySelectorAll(".card-game__front-back");
  div.forEach((cardList) => (cardList.style.display = "none"));
}

function compareBounty(index) {
  if (index === 0) {
    if (sliced[0].bounty > sliced[1].bounty) {
      score++;
      alert(
        `well done, ${sliced[0].name}'s bounty is higher than ${sliced[1].name}'s!`,
      );
    } else {
      alert(
        `${sliced[0].name}'s bounty is NOT higher than ${sliced[1].name}'s!`,
      );
    }
  } else {
    if (sliced[1].bounty > sliced[0].bounty) {
      score++;
      alert(
        `well done, ${sliced[1].name}'s bounty is higher than ${sliced[0].name}'s!`,
      );
    } else {
      alert(
        `${sliced[1].name}'s bounty is NOT higher than ${sliced[0].name}'s!`,
      );
    }
  }

  round += 2;
  userScore.textContent = score;
  hideSlice();
  sliced = shuffledArray.slice(round, round + 2);
  getTwoCards(sliced);
}

// === Flip card === //

function flipCard() {
  if (cardFrontBack.classList.contains("--active")) {
    cardFrontBack.classList.remove("--active");
  } else {
    cardFrontBack.classList.add("--active");
  }
}
