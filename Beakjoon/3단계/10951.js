const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(' ');
  
  console.log(Number(numbers[0]) + Number(numbers[1]));
}