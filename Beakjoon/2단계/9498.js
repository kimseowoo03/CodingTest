const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const score  = Number(input[0]);

if (90 <= score) {
  console.log("A");
} else if (80 <= score) {
  console.log("B");
} else if (70 <= score) {
  console.log("C");
} else if (60 <= score) {
  console.log("D");
} else {
  console.log("F");
}