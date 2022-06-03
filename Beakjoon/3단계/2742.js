const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

let sum = '';
for(let i = Number(input[0]); i >= 1; i--){
  sum+=  Number(i) + "\n";
}
console.log(sum);