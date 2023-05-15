const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = loginForm.elements["email"];
  const passwordInput = loginForm.elements["password"];
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  loginForm.reset();
});
