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

const charactersArray = [
  {
    name: "Luffy",
    bounty: 3_000_000_000,
    image: "images/Luffy-front.png",
  },
  { name: "Zoro", bounty: 1_111_000_000 },
  { name: "Sanji", bounty: 1_032_000_000 },
  { name: "Nami", bounty: 366_000_000 },
  { name: "Usopp", bounty: 500_000_000 },
  { name: "Chopper", bounty: 1_000 },
  { name: "Robin", bounty: 930_000_000 },
  { name: "Franky", bounty: 394_000_000 },
  { name: "Brook", bounty: 383_000_000 },
  { name: "Jinbe", bounty: 1_100_000_000 },
];

console.log(charactersArray);
let score = 0;
let randomized = [];
let round = 0;

// compare bounties

function compareBounty(index) {
  let sliced = charactersArray.slice(0, 2);
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
}

// === Flip card === //

const cardFrontBack = document.querySelector(".card-game__front-back");
function flipCard() {
  if (cardFrontBack.classList.contains("--active")) {
    cardFrontBack.classList.remove("--active");
  } else {
    cardFrontBack.classList.add("--active");
  }
}

//math random -> get an extra array to track the indexes and pull characters from the original arrays
