

const ulCategories = document.querySelector("#categories")
console.log(`Number of categories: ${Number(ulCategories.children.length)}`);//Number of categories
 
const category = document.querySelector("h2").textContent //Animals

const elements = document.querySelectorAll(".item");

elements.forEach(element => {  
    console.log(`Category : ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
} 
)
