const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const mainList = document.querySelector("#ingredients")


ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  mainList.append(item)
  return item;
}
)





