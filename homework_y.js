function isValidPhone(phone) {
  
  if (!(phone.startsWith("8") || phone.startsWith("+7"))) {
    return false;
  }

  
  const digits = phone.replace(/\D/g, "");

  
  return digits.length === 11;
}

function normalizePhone(phone) {
  
  let digits = phone.replace(/\D/g, "");

  
  if (digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  }

  return digits;
}

function formatToInternational(digits) {
    return +7 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)};
}

function formatPhoneNumber(phone) {
  
  if (!isValidPhone(phone)) {
    return "Ошибка: неверный формат номера телефона.";
  }

  
  const normalized = normalizePhone(phone);

  
  return formatToInternational(normalized);
}
