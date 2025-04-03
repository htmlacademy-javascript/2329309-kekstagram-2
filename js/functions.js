function chekLength(string, length) {
  if (string.length <= length) {
    return true;
  }

  return false;
}

chekLength('проверяемая строка', 10);

function chekPalindrome(string) {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizeString.split('').reverse().join('');
  return normalizeString === reverseString;
}

chekPalindrome('топот');
