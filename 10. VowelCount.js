/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Vowel Count                                                                         *
 *  Using the JavaScript language, have the function VowelCount(str) take the str       *
 *  string parameter being passed and return the number of vowels the string contains   *
 *  (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this       *
 *  challenge.                                                                          *
 *                                                                                      *
 ***************************************************************************************/

function VowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let tot = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === vowels[i]) {
        tot++;
      }
    }
  }
  return tot;
}

VowelCount("Todas las vacas comen pasto");
