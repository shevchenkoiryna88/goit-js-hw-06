const controller = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

controller.addEventListener("input", () => {
    const textSize = controller.value;
    
    console.log(textSize);

    text.style.fontSize = `${fontSize}px`
    return textSize
}
);
