export const SubmitButton = (onClick: (event: MouseEvent) => void) => {
  const button = document.createElement("button");
  button.id = "submit-button";
  button.classList.add("submit-button");
  button.type = "submit";
  button.innerText = "Submit";
  button.disabled = true;
  button.addEventListener("click", onClick);

  return button;
};
