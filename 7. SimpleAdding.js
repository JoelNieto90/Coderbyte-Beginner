/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Simple Adding                                                                       *
 *  Using the JavaScript language, have the function SimpleAdding(num) add up all the   *
 *  numbers from 1 to num. For the test cases, the parameter num will be any number     *
 *  from 1 to 1000.                                                                     *
 *                                                                                      *
 ***************************************************************************************/

function SimpleAdding(num) {
  let tot = 0;
  if (num <= 0) {
    return num;
  } else {
    for (let i = 1; i <= num; i++) {
      tot += i;
    }
  }
  console.log(tot);
}

SimpleAdding(10);


/***************************************************************************************
 *                                   Other solutions                                   *
 ***************************************************************************************/

function SimpleAdding(num) {
  num = (num * (num + 1)) / 2;
  console.log(num);
}
SimpleAdding(10);
