const input = document.querySelector("#name-input")
console.log(input);
const output = document.querySelector("#name-output")
console.log(output);

input.addEventListener("input", () => {
    const name = input.value;
    if (name === "") {
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = name;
    }
}
);
