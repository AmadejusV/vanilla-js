import { Input } from "../components/form/input";
import { SubmitButton } from "../components/form/submitButton";
import { MainArticle } from "../components/mainArticle";
import { showNotification } from "../components/notification";
import { emailIsValid, nameIsValid, numberIsValid, validateForm } from "../models/formValidation";

export const FormExercise = () => {
  const formValidation = {
    nameValid: false,
    numberValid: false,
    emailValid: false,
  };

  const main = document.createElement("main");
  const article = MainArticle("form-article");
  main.appendChild(article);

  const form = document.createElement("form");
  form.classList.add("form-exercise");
  form.method = "post";
  article.appendChild(form);

  form.appendChild(
    Input("text", "Name", "Enter your name", (value) => {
      const isValid = nameIsValid(value);
      formValidation.nameValid = isValid;
      validateForm(formValidation, "submit-button");
      return isValid ? { isValid } : { isValid, message: "Name is required" };
    })
  );

  form.appendChild(
    Input("email", "Email", "Enter your email address", (value) => {
      const { isValid, message } = emailIsValid(value);
      formValidation.emailValid = isValid;
      validateForm(formValidation, "submit-button");
      return isValid ? { isValid } : { isValid, message: message };
    })
  );

  form.appendChild(
    Input("phone", "Phone", "Enter your phone", (value) => {
      const { isValid, message } = numberIsValid(value);
      formValidation.numberValid = isValid;
      validateForm(formValidation, "submit-button");
      return isValid ? { isValid } : { isValid, message: message };
    })
  );

  form.appendChild(
    SubmitButton((event) => {
      event.preventDefault();
      const name = document.querySelector("input[name='Name']") as HTMLInputElement;
      const phone = document.querySelector("input[name='Phone']") as HTMLInputElement;
      const email = document.querySelector("input[name='Email']") as HTMLInputElement;

      console.log(name.value, email.value, phone.value);
      showNotification("Form submitted successfully");
    })
  );

  return main;
};
