// Отримати посилання на форму
let form = document.querySelector(".login-form");

// Додати обробник події submit
form.addEventListener("submit", function(event) {
  // Запобігти перезавантаженню сторінки
  event.preventDefault();

  // Отримати значення полів
  let email = form.elements.email.value;
  let password = form.elements.password.value;

  // Перевірити, чи всі поля заповнені
  if (!email || !password) {
    // Вивести попередження
    alert("Всі поля повинні бути заповнені!");
  } else {
    // Створити об'єкт із даними
    let data = {
      email: email,
      password: password
    };

    // Вивести об'єкт в консоль
    console.log(data);

    // Очистити значення полів
    form.reset();
  }
});
