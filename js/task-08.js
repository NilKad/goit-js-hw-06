const form = document.querySelector(".login-form");

const sendForm = (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset();
  }
};

form.addEventListener("submit", sendForm);
