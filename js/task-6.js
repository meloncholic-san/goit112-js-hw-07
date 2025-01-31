function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.buttonCreate.addEventListener("click", buttonCreateHandler);
refs.buttonDestroy.addEventListener("click", buttonDestroyHandler);

function buttonCreateHandler() {
  const amount = Number(refs.input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
}

function buttonDestroyHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  refs.boxesContainer.innerHTML = "";
  let boxes = ""

  for (let i = 1; i <= amount; i++) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const color = getRandomHexColor();
    
    boxes += `<div 
      style="
        width: ${width}px; 
        height: ${height}px; 
        background-color: ${color}; 
        margin: 5px; 
        display: inline-block;">
    </div>`;
  }
  
  refs.boxesContainer.innerHTML = boxes;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}
