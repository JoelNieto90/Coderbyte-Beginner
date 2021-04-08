/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Letter Capitalize                                                                   *
 *  Using the JavaScript language, have the function LetterCapitalize(str) take the     *
 *  str parameter being passed and capitalize the first letter of each word. Words      *
 *  will be separated by only one space.                                                *
 *                                                                                      *
 ***************************************************************************************/

function LetterCapitalize(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  return arr.join(" ");
}
LetterCapitalize("i love dog");


/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LetterCapitalize(str) {
  let arr = str.split(" ");

  console.log(
    str.replace(/(^|\s)\S/g, function (letter) {
      return letter.toUpperCase();
    })
  );
}

LetterCapitalize("i love dog");


/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LetterCapitalize(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}

LetterCapitalize("i love dog");
