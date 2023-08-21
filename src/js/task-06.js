const validationInput = document.querySelector("#validation-input")
// const valid = document.querySelector("validation-input.valid")
// const invalid = document.querySelector("#validation-input.invalid")

validationInput.addEventListener("blur", () => {
    const inputTextLength = validationInput.value.length

    const expectedLength = Number(validationInput.dataset.length)
    

    if (inputTextLength === expectedLength) {
        validationInput.classList.add("valid")
        validationInput.classList.remove("invalid")
    }
    else {
        validationInput.classList.add("invalid")
        validationInput.classList.remove("valid")
    }
});