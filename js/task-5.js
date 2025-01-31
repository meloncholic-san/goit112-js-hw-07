function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const refs = {
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", buttonHandler);

function buttonHandler() {
  const randomColor = getRandomHexColor(); 
  document.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
}
