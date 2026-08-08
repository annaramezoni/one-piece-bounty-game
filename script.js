// ======== Carousel ======== //

const cardList = document.querySelectorAll(".carousel__card");
const cardListArray = Array.from(cardList);
console.log(cardListArray);
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// current index with display block, others with display none

let currentIndex = 0;

cardListArray.forEach((cardList) => (cardList.style.display = "none"));
cardListArray[currentIndex].style.display = "block";
//change the index when press next button - add event listener to nextButton
nextButton.addEventListener("click", displayNextItem);

//each time the button is clicked the index changes and the style display to block
function displayNextItem() {
  if (currentIndex === cardListArray.length - 1) {
    currentIndex = 0;
    cardListArray[currentIndex].style.display = "block";
    cardListArray.at(-1).style.display = "none";
  } else {
    currentIndex++;
    cardListArray[currentIndex - 1].style.display = "none";
    cardListArray[currentIndex].style.display = "block";
  }
  console.log(currentIndex, cardListArray.length);
}

//add eventListener to prevbutton and

prevButton.addEventListener("click", displayPrevItem);
function displayPrevItem() {
  if (currentIndex === 0) {
    currentIndex = cardListArray.length - 1;
    cardListArray[currentIndex].style.display = "block";
    cardListArray.at(0).style.display = "none";
  } else {
    currentIndex--;
    cardListArray[currentIndex + 1].style.display = "none";
    cardListArray[currentIndex].style.display = "block";
  }
  console.log(currentIndex, cardListArray.length);
}

//
//
//
//
// const $cardFrontBack = document.querySelector(".card-front-back");
// function handleClick() {
//   if ($cardFrontBack.classList.contains("--active")) {
//     $cardFrontBack.classList.remove("--active");
//   } else {
//     $cardFrontBack.classList.add("--active");
//   }
// }
