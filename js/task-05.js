

const input = document.querySelector("#name-input")

const spanRezult = document.querySelector("#name-output")

input.addEventListener("input", function (event) {
   
    let inputNewInfo = event.currentTarget.value;
    if (!inputNewInfo) {
     spanRezult.textContent = "Anonymous"
    } else {
     spanRezult.textContent = inputNewInfo;

    }
}
)



// console.log(input.textContent);
// console.log(spanRezult.textContent);
