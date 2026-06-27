export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone) => {
  return /^\d{7,}$/.test(phone);
};