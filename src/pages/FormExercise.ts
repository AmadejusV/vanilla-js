import { Input } from "../components/form/input";
import { SubmitButton } from "../components/form/submitButton";
import { MainArticle } from "../components/mainArticle";
import { nameIsValid, numberIsValid, validateForm } from "../models/formValidation";

export const FormExercise = () => {
  const formValidation = {
    nameValid: false,
    numberValid: false,
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
    Input("number", "Phone", "Enter your phone", (value) => {
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

      console.log(name.value, phone.value);
    })
  );

  return main;
};
