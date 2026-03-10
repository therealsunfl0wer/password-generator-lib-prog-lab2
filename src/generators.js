/**
 * Generator function that produces an infinite stream of random strings.
 * Yields progressively longer strings on each iteration.
 *
 * @param {number} length - Maximum length of the generated string
 * @param {string} [characters] - Custom character set to use
 * @yields {string} Progressive random strings
 */
export function* stringRandom(length, characters) {
  if (typeof characters === "undefined") {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~";
  } else {
    characters = characters.toString();
  }
  let output = "";
  for (let i = 1; i <= length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    output += characters[index];
    yield output;
  }
}
