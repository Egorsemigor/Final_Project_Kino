const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const passwordRegExp = /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$)/;
export const validateRequired = (value: string) => {
  return value === "" ? "It is necessary" : "";
};
export const validateEmail = (value: string) => {
  return !emailRegExp.test(value) ? "Invalid pattern of mail" : "";
};
export const validatePassword = (value: string) => {
  return !passwordRegExp.test(value) ? "Invalid pattern of password" : "";
};
export const validateConfirmPassword = (password: string, confirmPassword: string) => {
  return password !== confirmPassword
    ? "Invalid pattern of confirm password"
    : "";
};
