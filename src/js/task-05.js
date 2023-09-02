

const input = document.querySelector("#name-input")

const spanRezult = document.querySelector("#name-output")

input.addEventListener("input", function (event) {
   
 let inputNewInfo = event.currentTarget.value;
    spanRezult.textContent = inputNewInfo;
}
)



// console.log(input.textContent);
// console.log(spanRezult.textContent);
