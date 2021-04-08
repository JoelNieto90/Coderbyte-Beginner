/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Longest Word                                                                        *
 *  Using the JavaScript language, have the function LongestWord(sen) take the sen      *
 *  parameter being passed and return the largest word in  the string. If there are     *
 *  two or more words that are the same length,  return the first word from the string  *
 *  with that length. Ignore punctuation and assume sen will not be empty.              *
 *                                                                                      *
 ***************************************************************************************/

function LongestWord(sen) {
  let arr = sen.split(" ");
  let longestWordCont = 0;
  let longestWord;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/\W+/g, "");
    if (arr[i].length > longestWordCont) {
      longestWordCont = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

LongestWord("I Love dogs");
LongestWord("fun&!! time");

/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LongestWord(sen) {
  let words = sen.match(/\w+/g);
  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

LongestWord("I Love dogs");
LongestWord("fun&!! time");

/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LongestWord(sen) {
  var arr = sen.match(/[a-z]+/gi);

  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted;
}

LongestWord("I Love dogs");
LongestWord("fun&!! time");

/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LongestWord(sen) {
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, "");

  let longest = "";

  var arr = sen.split(" ").forEach((word) => {
    if (word.length > longest.length) longest = word;
  });

  return longest;
}

LongestWord("I Love dogs");
LongestWord("fun&!! time");

/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function LongestWord(sen) {
  var words = sen.match(/\w+/g);
  var longest = words[0];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

LongestWord("I Love dogs");
LongestWord("fun&!! time");
