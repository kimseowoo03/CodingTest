let fs = require("fs");
let letterArr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");
const set = new Set(letterArr);
const uniqueALPHABETS = [...set];

let countArr = [];
for (let alphabet of uniqueALPHABETS) {
  let count = letterArr.filter((element) => alphabet === element).length;
  countArr.push(count);
}
let maxNum = Math.max(...countArr);
const isDup = countArr.indexOf(maxNum) !== countArr.lastIndexOf(maxNum);
console.log(isDup ? "?" : uniqueALPHABETS[countArr.indexOf(maxNum)]);
