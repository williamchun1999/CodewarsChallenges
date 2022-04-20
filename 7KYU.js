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
// Too many values.. Definitely should refactor into a filter method instead.
