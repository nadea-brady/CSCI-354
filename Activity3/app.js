/**
 * This function inverts the case of each letter in the given String.
 * For example, "Computer" becomes "cOMPUTER".
 * It may have a few small bugs...
 */
function invertCase(text) {
  const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let tempString = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (LOWER_CASE.indexOf(char) !== -1) { // is lowercase
      let upper = UPPER_CASE[LOWER_CASE.indexOf(char)];
      tempString += upper;
    } else if (UPPER_CASE.indexOf(char) !== -1) { // is uppercase
      let lower = LOWER_CASE[UPPER_CASE.indexOf(char)];
      tempString += lower;
    } else {
      tempString += char; // leave non-alphabetic characters unchanged
    }
  }
  return tempString;
}

//Make function available to tester.
//This syntax will not work in the browser
exports.invertCase = invertCase;