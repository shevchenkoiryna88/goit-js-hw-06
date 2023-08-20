// неаонятно как это написать правильно
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery")
console.log(gallery);

let list = ""
images.forEach(element => {
  list += "<li>
  <img 
  src = "${element.url}"
  alt="${element.alt}">
  </li>"

} );



gallery.insertAdjacentHTML("beforeend", list);

gallery.classList.add("gallery-style");
gallery.style.margin = "0"
gallery.style.padding = "0"
gallery.style.display = "flex"
gallery.style.gap = "15px"
