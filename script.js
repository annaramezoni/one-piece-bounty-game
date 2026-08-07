const $cardFrontBack = document.querySelector(".card-front-back");
function handleClick() {
  if ($cardFrontBack.classList.contains("--active")) {
    $cardFrontBack.classList.remove("--active");
  } else {
    $cardFrontBack.classList.add("--active");
  }
}
