export const FormExercise = () => {
  const main = document.createElement("main");
  const article = document.createElement("article");

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  article.innerHTML = `This is the form page`;

  main.appendChild(article);
  article.appendChild(
    Input("text", "Name", "Enter your name", (value) => {
      return value.length > 0
        ? { isValid: true }
        : { isValid: false, message: "Name is required" };
    })
  );

  article.appendChild(
    Input("number", "Phone", "Enter your phone", (value) => {
      return value.length > 6
        ? { isValid: true }
        : { isValid: false, message: "Phone is required" };
    })
  );

  return main;
};

export const Input = (
  inputType: string,
  label: string,
  placeholder?: string,
  validator?: (value: string) => { isValid: boolean; message?: string }
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
    input.addEventListener("input", (event) => {
      const { isValid, message } = validator(
        (event.target as HTMLInputElement).value
      );

      //simplify, avoid valid value removing all validation texts, by referring to correct validation text for removal
      //avoid repeating validation text creation when value is consistently invalid during input
      if (message && !isValid) {
        const validationText = document.createElement("small");
        validationText.id = "validationText";
        validationText.style.color = "red";
        validationText.innerText = message;
        inputContainer.appendChild(validationText);
      } else {
        const validationText = document.getElementById("validationText");
        if (validationText) {
          validationText.remove();
        }
      }

      input.style.borderColor = isValid ? "green" : "red";
    });
  }

  return inputContainer;
};
