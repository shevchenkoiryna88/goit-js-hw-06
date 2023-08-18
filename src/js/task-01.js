// 1.Порахує і виведе в консоль кількість категорій в 
// ul#categories, тобто елементів li.item.

const categories = document.querySelector('#categories');

const allItems = categories.querySelectorAll('.item');

// 1.Порахує і виведе в консоль кількість категорій
console.log(`Number of categories: ${allItems.length}`);

// forEach

allItems.forEach(item => {
// h2
  const title = item.querySelector('h2').textContent;
// всі li.item
  const elements = item.querySelectorAll('li');
  // 2. Виводимо текст заголовка і кількість елементів
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});