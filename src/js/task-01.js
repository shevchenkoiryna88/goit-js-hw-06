

const ulCategories = document.querySelector("#categories")
console.log(`Number of categories: ${ulCategories.children.length}`);//Number of categories
 
const category = document.querySelector("h2").textContent //Animals
console.log(category);

const elements = document.querySelectorAll(".item");
console.log(elements);


elements.forEach(element => {  
  console.log(`Category : ${category}`);
  console.log(`Elements: ${elements.length}`);
} 
  )