
let counterValue = 0;

const span = document.querySelector("#value");

const btnMinus = document.querySelector(`button[data-action="decrement"]`);
btnMinus.addEventListener("click", minus);

const btnPlus = document.querySelector(`button[data-action="increment"]`);
btnPlus.addEventListener("click", plus);

function minus() {
    counterValue -= 1;
    span.textContent = counterValue;
}

function plus() {    
    counterValue += 1;
    span.textContent = counterValue;
}




// console.dir(btnMinus);
// console.log(document.querySelector("#value").textContent);
// console.log(btnPlus);

// console.log(counterValue);
