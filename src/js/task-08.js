let form = document.querySelector(".login-form");


form.addEventListener("submit", function(event) {

  event.preventDefault();// без перезагрузки

  let email = form.elements.email.value;
  let password = form.elements.password.value;

  if (!email || !password) {
    alert("Everything should be filled!")
  } else {

    let result = {
      email: email,
      password: password,
    };

    console.log(result);
    form.reset(); //очистим поля
  }
});
