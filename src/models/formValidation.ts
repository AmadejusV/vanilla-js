export interface IFormValidation {
  nameValid: boolean;
  numberValid: boolean;
}

export const validateForm = (formValidation: IFormValidation, elementId: string) => {
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

export const nameIsValid = (value: string) => {
  return value.length > 0;
};

export const numberIsValid = (value: string) => {
  if (value.length === 10) {
    return { isValid: true };
  }
  if (value.length === 0) {
    return { isValid: false, message: "Phone is required" };
  }
  return { isValid: false, message: "Phone should be 10 characters long" };
};

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailIsValid = (email: string) => {
  if (email.length === 0) {
    return { isValid: false, message: "Email is required" };
  }

  return EMAIL_REGEX.test(String(email).toLowerCase())
    ? { isValid: true }
    : { isValid: false, message: "Please enter a valid email address" };
};
