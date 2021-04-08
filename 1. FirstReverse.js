/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  First Reverse                                                                       *
*  Have the function FirstReverse() take the str parameter being passed and return     *
*  the string in reversed order.                                                       *
*                                                                                      *
***************************************************************************************/

function FirstReverse(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr += str[i];
  }
  return arr;
}

FirstReverse("Coderbyte");
