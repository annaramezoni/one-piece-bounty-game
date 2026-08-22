// ======== Carousel ======== //

const cardList = document.querySelectorAll(".carousel__card");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// current index with display block, others with display none

function hideAllCards() {
  cardList.forEach((cardList) => (cardList.style.display = "none"));
}
hideAllCards();
let currentIndex = 0;
cardList[currentIndex].style.display = "block";
//change the index when press next button - add event listener to nextButton
nextButton.addEventListener("click", displayNextItem);

//each time the button is clicked the index changes and the style display to block
function displayNextItem() {
  hideAllCards();
  if (currentIndex === cardList.length - 1) {
    currentIndex = 0;
    cardList[currentIndex].style.display = "block";
  } else {
    currentIndex++;
    cardList[currentIndex].style.display = "block";
  }
}

//add eventListener to prevbutton and

prevButton.addEventListener("click", displayPrevItem);
function displayPrevItem() {
  hideAllCards();
  if (currentIndex === 0) {
    currentIndex = cardList.length - 1;
    cardList[currentIndex].style.display = "block";
  } else {
    currentIndex--;
    cardList[currentIndex].style.display = "block";
  }
}

//each button(character name), changes the display;

const characterName = [
  "Luffy",
  "Zoro",
  "Sanji",
  "Nami",
  "Usopp",
  "Chopper",
  "Nico Robin",
  "Brook",
  "Franky",
  "Jinbe",
  "Going Merry",
  "Thousand Sunny",
];

function createButtonEl(index) {
  const characterButtons = document.querySelector(".carousel__character-btns"); //
  const characterButton = document.createElement("button");
  characterButtons.appendChild(characterButton);
  characterButton.textContent = characterName[index];
  characterButton.addEventListener("click", () => {
    displayCharacter(index);
  });
}

characterName.forEach((character, index) => {
  createButtonEl(index);
});

function displayCharacter(index) {
  hideAllCards();
  cardList[index].style.display = "block";
}

// ======== Game ======== //
//const cardFrontBack = document.querySelector(".card-game__front-back");
const charactersArray = [
  {
    name: "Luffy",
    bounty: 3_000_000_000,
    imageFront: "images/Luffy-front.png",
    imageBack: "images/Luffy-back.png",
  },
  {
    name: "Zoro",
    bounty: 1_111_000_000,
    imageFront: "images/Zoro-front.png",
    imageBack: "images/Zoro-back.png",
  },
  {
    name: "Sanji",
    bounty: 1_032_000_000,
    imageFront: "images/Sanji-front.png",
    imageBack: "images/Sanji-back.png",
  },
  {
    name: "Nami",
    bounty: 366_000_000,
    imageFront: "images/Nami-front.png",
    imageBack: "images/Nami-back.png",
  },
  {
    name: "Usopp",
    bounty: 500_000_000,
    imageFront: "images/Usopp-front.png",
    imageBack: "images/Usopp-back.png",
  },
  {
    name: "Chopper",
    bounty: 1_000,
    imageFront: "images/Chopper-front.png",
    imageBack: "images/Chopper-back.png",
  },
  {
    name: "Robin",
    bounty: 930_000_000,
    imageFront: "images/Nico-Robin-front.png",
    imageBack: "images/Nico-Robin-back.png",
  },
  {
    name: "Franky",
    bounty: 394_000_000,
    imageFront: "images/Franky-front.png",
    imageBack: "images/Franky-back.png",
  },
  {
    name: "Brook",
    bounty: 383_000_000,
    imageFront: "images/Brook-front.png",
    imageBack: "images/Brook-back.png",
  },
  {
    name: "Jinbe",
    bounty: 1_100_000_000,
    imageFront: "images/Jinbe-front.png",
    imageBack: "images/Jinbe-back.png",
  },
];

let score = 0;
let randomized = [];
let round = 0;
const userScore = document.getElementById("score");

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

//shuffle array
function shuffle(arr) {
  // Create a shallow copy to prevent mutating the original array
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements using destructuring assignment
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

const shuffledArray = shuffle(charactersArray);

let sliced = shuffledArray.slice(round, round + 2);
function hideSlice() {
  const div = document.querySelectorAll(".card-game__front-back");
  div.forEach((cardList) => (cardList.style.display = "none"));
}

function getTwoCards(cards) {
  cards.forEach((character, index) => {
    createImageFrontBack(character.imageFront, character.imageBack, index);
  });
}

getTwoCards(sliced);

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
