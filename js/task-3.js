const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output")
}

refs.input.addEventListener("input", inputHandler);
function inputHandler(event) {
    const inputValue = event.target.value.trim();

    if (inputValue === "") {
        refs.output.textContent = "Anonymous";
    } else {
        refs.output.textContent = inputValue;
    }
}
