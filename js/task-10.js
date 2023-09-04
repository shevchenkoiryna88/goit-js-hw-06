
const input = document.querySelector("input")
  const create = document.querySelector("[data-create]")
    const destroy = document.querySelector("[data-destroy]")
      const boxes = document.querySelector("#boxes")


// function createBoxes
function createBoxes(amount) {

  let elementSize = 30;

// **dobavila proverky na min i max znachenie
  if (amount >= input.min && amount <= input.max) {

    let i = 0;
  do {
  
    let newDiv = document.createElement("div");

     // STYLES  
    boxes.append(newDiv);
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${elementSize}px`;
    newDiv.style.height = `${elementSize}px`;
    newDiv.style.borderRadius = `50px`;
    i += 1;
    elementSize += 10;
  } while (i < amount);
  input.reset
    
  } else {
    alert ("Type number from 1 to 100")
  }
  
}

// create BTN

create.addEventListener("click", () => {
  let newAmount = Number(input.value);
  createBoxes(newAmount)  
});

// destroy BTN (** dopolnitenlo ochishaet input)
destroy.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = ""
  
}




// **Dopolnitelno sobitie na "Esk"

document.addEventListener("keydown", function (event) {
console.log(event.key);
  if (event.key === "Escape") {
    destroyBoxes(Number(input.value))    
  }
})



// **Dopolnitelno sobitie na "ENTER"

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createBoxes(Number(input.value))    
  }
})

// function getRandomHexColor()

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

