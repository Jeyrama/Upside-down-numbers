/*
Consider the numbers 6969 and 9116. 
When you rotate them 180 degrees (upside down), these numbers remain the same. 
To clarify, if we write them down on a paper and turn the paper upside down, 
the numbers will be the same. 
Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. 
For example, solve(0,10) = 3, 
because there are only 3 upside down numbers >= 0 and < 10. 
They are 0, 1, 8.
*/


// Solution

const upsideDownNumbers = {
  "0": 0,
  "1": 1,
  "8": 8,
  "6": 9,
  "9": 6
};

function isUpsideDown(number) {
  const result = +number.toString().split("").reverse().map(item => upsideDownNumbers[item]).join("");

  return result === number;
}

function solve(x, y) {
  let count = 0;
  for (let i = x; i < y; i++) {
    if(isUpsideDown(i)) {
      count++;
    }
  }
  return count;
};