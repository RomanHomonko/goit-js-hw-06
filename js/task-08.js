const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  loginForm.reset();
});
