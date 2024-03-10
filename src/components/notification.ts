export const showNotification = (message: string) => {
  const popupId = `notification-popup-${message}`;
  const popupExists = document.getElementById(popupId);
  if (popupExists) {
    return;
  }

  const popup = document.createElement("div");
  popup.id = popupId;
  const messageElement = document.createElement("p");
  popup.appendChild(messageElement);

  popup.classList.add("notification-popup");
  messageElement.classList.add("notification-message");
  messageElement.textContent = message;
  document.body.appendChild(popup);

  void popup.offsetWidth;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");

    popup.addEventListener("transitionend", () => {
      popup.remove();
    });
  }, 3000);
};
