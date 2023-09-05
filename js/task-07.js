
const inputController = document.querySelector("#font-size-control")

const span = document.querySelector("#text");
    
inputController.addEventListener("input", () => {
    let newTextSize = Number(inputController.value);
    span.style.fontSize = `${newTextSize}px`;
    return newTextSize

})

