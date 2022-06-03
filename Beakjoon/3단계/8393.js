const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

let sum = 0;
for(let i = 1; i <= Number(input[0]); sum+= i++ );
console.log(sum);