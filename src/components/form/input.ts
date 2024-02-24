export const Input = (
  inputType: string,
  label: string,
  placeholder?: string,
  validator?: (value: string) => { isValid: boolean; message?: string }
) => {
  const inputContainer = document.createElement("div");

  if (label) {
    const inputLabel = document.createElement("label");
    inputLabel.innerText = label;
    inputLabel.htmlFor = label;
    inputContainer.appendChild(inputLabel);
  }

  const input = document.createElement("input");
  input.id = label;
  input.name = label;
  input.type = inputType;
  inputContainer.appendChild(input);

  if (placeholder) {
    input.placeholder = placeholder;
  }

  if (validator) {
    let timeoutId: number | null = null;

    input.addEventListener("input", (event) => {
      // Clear the previous timeout if it exists
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      // Set a new timeout
      timeoutId = window.setTimeout(() => {
        const { isValid, message } = validator((event.target as HTMLInputElement).value);

        if (message && !isValid) {
          let validationText = document.querySelector(`small[data-for='${input.id}']`) as HTMLElement;
          if (!validationText) {
            validationText = document.createElement("small");
            validationText.dataset.for = input.id;
            validationText.style.color = "red";
            inputContainer.appendChild(validationText);
          }
          validationText.innerText = message;
        } else {
          const validationText = document.querySelector(`small[data-for='${input.id}']`) as HTMLElement;
          if (validationText) {
            validationText.remove();
          }
        }

        input.style.borderColor = isValid ? "green" : "red";
      }, 500); // 500ms delay
    });
  }

  return inputContainer;
};

//TODO: check for improvements
