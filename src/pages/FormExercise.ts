import { Input } from "../components/form/input";

export const FormExercise = () => {
  const formValidation: IFormValidation = {
    nameValid: false,
    numberValid: false,
  };

  const main = document.createElement("main");
  const article = document.createElement("article");

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  article.innerHTML = `This is the form page`;

  main.appendChild(article);

  const form = document.createElement("form");
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

  const submitButton = document.createElement("button");
  submitButton.id = "submit-button";
  submitButton.type = "submit";
  submitButton.innerText = "Submit";
  submitButton.disabled = true;
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector("input[name='Name']") as HTMLInputElement;
    const phone = document.querySelector("input[name='Phone']") as HTMLInputElement;

    console.log(name.value, phone.value);
  });

  form.appendChild(submitButton);

  return main;
};

interface IFormValidation {
  nameValid: boolean;
  numberValid: boolean;
}

const validateForm = (formValidation: IFormValidation, elementId: string) => {
  const submitButton = document.getElementById(elementId) as HTMLButtonElement;

  for (const key in formValidation) {
    if (!formValidation[key as keyof IFormValidation]) {
      submitButton.disabled = true;
      return true;
    }
  }
  submitButton.disabled = false;
  return false;
};

const nameIsValid = (value: string) => {
  return value.length > 0;
};

const numberIsValid = (value: string) => {
  if (value.length === 10) {
    return { isValid: true };
  }
  if (value.length === 0) {
    return { isValid: false, message: "Phone is required" };
  }
  return { isValid: false, message: "Phone should be 10 characters long" };
};
//TODO: REFACTOR to reduce complexity and increase readability
