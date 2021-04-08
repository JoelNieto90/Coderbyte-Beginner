/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Letter Changes                                                                      *
 *  Using the JavaScript language, have the function LetterChanges(str) take the str    *
 *  parameter being passed and modify it using the following algorithm. Replace every   *
 *  letter in the string with the letter following it in the alphabet                   *
 *  (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string      *
 *  (a, e, i, o, u) and finally return this modified string.                            *
 *                                                                                      *
 ***************************************************************************************/

function LetterChanges(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];
  let newStr = [];
  let loc;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    loc = alphabet.indexOf(str[i]);
    if (loc === 25) {
      newStr += "a";
    } else if (loc === -1) {
      newStr += str[i];
    } else {
      newStr += alphabet[loc + 1];
    }
  }
  return (
    newStr.replace(/[aeiou]/g, function (letter) {
      return letter.toUpperCase();
    })
  );
}

LetterChanges("Pedr0o");


/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LetterChanges(str) {
  let result = "";
  str.split("").forEach((letter) => {
    if (letter >= "a" && letter <= "z") {
      let num = letter.charCodeAt() + 1;
      if (num >= 123) num -= 26;
      letter = String.fromCharCode(num);
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        letter = letter.toUpperCase();
      }
    }
    result += letter;
  });
  return result;
}



/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LetterChanges(str) {
  let array = str.split("");
  array = array.map((letter) => {
    var newLetter = String.fromCharCode(letter.charCodeAt(0) + 1);

    if (!newLetter.match(/^[a-zA-Z]+$/)) {
      return letter;
    } else if (
      newLetter == "a" ||
      newLetter == "e" ||
      newLetter == "i" ||
      newLetter == "o" ||
      newLetter == "u"
    ) {
      return newLetter.toUpperCase();
    } else {
      return newLetter.toLowerCase();
    }
  });

  return array.join("");
}

