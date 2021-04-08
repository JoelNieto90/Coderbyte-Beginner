/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Word Count                                                                          *
 *  Using the JavaScript language, have the function WordCount(str) take the str        *
 *  string parameter being passed and return the number of words the string contains    *
 *  (ie. "Never eat shredded wheat" would return 4). Words will be separated by single  *
 *  spaces.                                                                             *
 *                                                                                      *
 ***************************************************************************************/

function WordCount(str) {
  let arr = str.split(" ");
  let tot = 0;
  arr.forEach((element) => {
    tot++;
  });
  return tot;
}

WordCount("Nunca coma trigo triturado");

/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function WordCount(str) {
  return str.split(" ").length;
}

WordCount("Nunca coma trigo triturado");
