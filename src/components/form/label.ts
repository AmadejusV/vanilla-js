export const InputLabel = (text: string) => {
  const label = document.createElement("label");
  label.classList.add("input-label");
  label.innerText = text;
  label.htmlFor = text;

  return label;
};
