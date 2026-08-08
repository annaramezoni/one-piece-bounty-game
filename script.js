// ======== Carousel ======== //

const cardList = document.querySelectorAll(".carousel__card");
console.log(cardList);
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
  if (currentIndex === cardList.length - 1) {
    currentIndex = 0;
    cardList[currentIndex].style.display = "block";
    cardList[cardList.length - 1].style.display = "none";
  } else {
    currentIndex++;
    cardList[currentIndex - 1].style.display = "none";
    cardList[currentIndex].style.display = "block";
  }
  console.log(currentIndex, cardList.length);
}

//add eventListener to prevbutton and

prevButton.addEventListener("click", displayPrevItem);
function displayPrevItem() {
  if (currentIndex === 0) {
    currentIndex = cardList.length - 1;
    cardList[currentIndex].style.display = "block";
    cardList[0].style.display = "none";
  } else {
    currentIndex--;
    cardList[currentIndex + 1].style.display = "none";
    cardList[currentIndex].style.display = "block";
  }
  console.log(currentIndex, cardList.length);
}

//each button, changes the display;

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
  console.log(characterButton);
}

characterName.forEach((character, index) => {
  createButtonEl(index);
});

function displayCharacter(index) {
  // hide all cards
  hideAllCards();
  // show cardList[index]
  cardList[index].style.display = "block";
}

// const $cardFrontBack = document.querySelector(".card-front-back");
// function handleClick() {
//   if ($cardFrontBack.classList.contains("--active")) {
//     $cardFrontBack.classList.remove("--active");
//   } else {
//     $cardFrontBack.classList.add("--active");
//   }
// }
