

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
console.log(list);

ingredients.map(element => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item")
  list.append(li)
  console.log(li);
}
  )





