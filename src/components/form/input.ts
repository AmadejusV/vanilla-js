import { debounce } from 'lodash';
import { ErrorMessage } from "./errorMessage";
import { InputLabel } from "./label";

export const Input = (
  inputType: string,
  label: string,
  placeholder?: string,
  validator?: (value: string) => { isValid: boolean; message?: string }
) => {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-field-container");

  if (label) {
    inputContainer.appendChild(InputLabel(label));
  }

  const input = document.createElement("input");
  input.id = label;
  input.name = label;
  input.type = inputType;
  input.classList.add("input-field", "error-message-spaceholder");
  inputContainer.appendChild(input);

  if (placeholder) {
    input.placeholder = placeholder;
  }

  if (validator) {
    input.addEventListener("input", debounce((event) => {
        const { isValid, message } = validator((event.target as HTMLInputElement).value);

        if (message && !isValid) {
          let validationText = document.querySelector(`small[data-for='${input.id}']`) as HTMLElement;
          if (!validationText) {
            input.classList.remove("error-message-spaceholder");
            validationText = ErrorMessage(input.id);
            inputContainer.appendChild(validationText);
          }
          validationText.innerText = message;
        } else {
          const validationText = document.querySelector(`small[data-for='${input.id}']`) as HTMLElement;
          if (validationText) {
            input.classList.add("error-message-spaceholder");
            validationText.remove();
          }
        }

        input.style.borderColor = isValid ? "green" : "red";
    }, 500));
  }

  return inputContainer;
};

//TODO: check for improvements
