
const input = document.querySelector("#validation-input")

const inpuDatatLength = Number(input.dataset.length)

input.addEventListener("blur", () => {
    if (input.value.length == inpuDatatLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }

})



// console.log(`dataset.length ${inpuDatatLength}` );

// console.log( `input.value length ${input.value.length}`);
