export const debounce = (callback: Function, delay = 1000) => {
  let timeoutId: number;

  return  (...args: any[]) => {
    clearTimeout(timeoutId);
    
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};