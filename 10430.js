const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

let first = B%10;
let second = Math.floor((B%100)/10);
let third = Math.floor(B / 100);

console.log(A*first);
console.log(A*second);
console.log(A*third);
console.log(A*B);