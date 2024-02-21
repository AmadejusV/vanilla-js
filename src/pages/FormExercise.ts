export const FormExercise = () => {
  const main = document.createElement("main");
  const article = document.createElement("article");

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  article.innerHTML = `This is the form page`;

  main.appendChild(article);
  article.appendChild(Input("text", "name", "Enter your name"));

  return main;
};

export const Input = (
  inputType: string,
  label: string,
  placeholder?: string,
  validator?: (value: string) => boolean
) => {
  //fix structure
  const inputContainer = document.createElement("div");

  if (label) {
    const inputLabel = document.createElement("label");
    inputLabel.innerText = label;
    inputLabel.setAttribute("for", label);
    inputContainer.appendChild(inputLabel);
  }

  const input = document.createElement("input");
  input.setAttribute("id", label);
  input.setAttribute("name", label);
  input.setAttribute("type", inputType);
  inputContainer.appendChild(input);

  if (placeholder) {
    input.setAttribute("placeholder", placeholder);
  }

  if (validator) {
    // try to make a dynamic validation message? Make the validator return an object with the message and the boolean?
    const validationText = document.createElement("small");
    inputContainer.appendChild(validationText);

    input.addEventListener("input", (event) => {
      const isValid = validator((event.target as HTMLInputElement).value);

      input.style.borderColor = isValid ? "green" : "red";
      validationText.style.borderColor = isValid ? "green" : "red";
    });
  }

  return input;
};
