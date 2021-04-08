/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Simple Symbols                                                                      *
 *  Using the JavaScript language, have the function SimpleSymbols(str) take the str    *
 *  parameter being passed and determine if it is an acceptable sequence by either      *
 *  returning the string true or false. The str parameter will be composed of + and =   *
 *  symbols with several letters between them (ie. ++d+===+c++==a) and for the string   *
 *  to be true each letter must be surrounded by a + symbol. So the string to the left  *
 *  would be false. The string will not be empty and will have at least one letter.     *
 *                                                                                      *
 ***************************************************************************************/

function SimpleSymbols(str) {
  let letter = str.toLowerCase().split("===");
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] >= "a" && letter[i] <= "z") {
      if (i === 0 || i === arguments.length) {
        return false;
      }

      if (letter[i - 1] !== "+" && letter[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
}

SimpleSymbols("++D===+c++===a");


/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function SimpleSymbols(str) {
  let reWrongSequence = /([^+]|^)[a-z]|[a-z]([^+]|$)/i;
  return !reWrongSequence.test(str);
}

SimpleSymbols("++D===+c++===a");
