function submitForm(event) {
  event.preventDefault();

  var form = document.querySelector(".login-form");
  var emailInput = form.elements.email;
  var passwordInput = form.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  var formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  console.log(formData);

  form.reset();
}
