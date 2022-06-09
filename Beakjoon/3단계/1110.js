const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
let num = +input;
let sum;
let i = 0;
while (true) {
    i++;
    sum = Math.floor(num / 10) + num % 10;
    num = num % 10 * 10 + sum % 10; 
    if (input == num) {
      console.log(i);
      break;
    } 
}