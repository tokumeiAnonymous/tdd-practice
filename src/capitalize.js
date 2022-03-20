export function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + word.substring(1).toLowerCase();
}