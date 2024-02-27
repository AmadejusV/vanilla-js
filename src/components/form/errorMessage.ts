export const ErrorMessage = (forInputId: string, message?: string) => {
  const error = document.createElement("small");
  error.dataset.for = forInputId;
  error.classList.add("input-validation-message");
  error.innerText = message || "";

  return error;
};
