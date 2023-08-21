// Отримуємо посилання на елемент форми 
const loginForm = document.querySelector(".login-form");

// Додаємо слухача події submit до елемента loginForm 
loginForm.addEventListener("submit", (event) => {
    // Запобігаємо перезавантаженню сторінки 
    event.preventDefault();
    // Отримуємо об’єкт з елементами форми 
    const formElements = event.currentTarget.elements;

    // Отримуємо значення полів email і password
    const email = formElements.email.value;
    const password = formElements.password.value;
    // Перевіряємо, чи є незаповнені поля 
    if (!email || !password) {
        // Якщо так, то виводимо alert з попередженням 
        alert("Everything should be filled");
        return;
    }
    // Створюємо об’єкт із введеними даними 
    const formData = { email, password, };
    // Виводимо об’єкт в консоль 
    console.log(formData); 
    // Очищаємо значення полів форми 
    loginForm.reset();
});
