function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};


refs.buttonCreate.addEventListener("click", buttonCreateHandler);
refs.buttonDestroy.addEventListener("click", buttonDestroyHandler);


function buttonCreateHandler()  {
  createBoxes(refs.input.value);

}

function buttonDestroyHandler() {
  destroyBoxes();
}


function createBoxes(amount) {
  refs.boxesContainer.innerHTML = "";
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    refs.boxesContainer.append(box);
  }
}

function destroyBoxes(){
  refs.boxesContainer.innerHTML = "";
}