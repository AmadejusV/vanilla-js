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
