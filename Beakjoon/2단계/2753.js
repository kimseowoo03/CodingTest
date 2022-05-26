const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = Number(input[0]);

if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}