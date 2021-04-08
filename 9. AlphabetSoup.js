/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Alphabet Soup                                                                       *
 *  Have the function AlphabetSoup(str) take the str string parameter being passed      *
 *  and return the string with the letters in alphabetical order                        *
 *  (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be       *
 *  included in the string.                                                             *
 *                                                                                      *
 ***************************************************************************************/

function AlphabetSoup(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  var newStr = arr.join("");
  console.log(newStr);
}

AlphabetSoup("hello");



/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function AlphabetSoup(str) {
  console.log(str.split("").sort().join(""));
}

AlphabetSoup("cba");
