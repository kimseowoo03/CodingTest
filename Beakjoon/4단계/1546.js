const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let N = input[0];
let array = input[1].split(" ");

let maxNum = Math.max(...array); 
let sum = 0;

for(let i = 0; i < N; i++){
  sum += array[i] / maxNum * 100;
}
console.log(sum / N);