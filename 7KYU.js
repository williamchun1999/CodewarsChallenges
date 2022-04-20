/*
April 20, 2022
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

// MY SOLUTION
function unusedDigits(...nums) {
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    let input = nums.join('');
    let result = ''
    for (let i = 0; i < digits.length; i++){
      if (!input.includes(digits[i])){
        result+= digits[i];
      }
    }
    return result;
  }
/* Comments

Too many values.. Definitely should refactor into a filter method instead.

*/



/* April 20, 2022
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.

Example:
function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

chain(2, [add, mult]);
// returns 90;
*/

// MY SOLUTION
function chain(input, fs) {
  for (let i = 0; i < fs.length; i++){
    input = fs[i](input);
  }
  return input;
}
/* Comments

  Bit hard to read. Using a reduce method would be more readable, letting us know it's combining results of previous functions to subsequent functions.

*/



