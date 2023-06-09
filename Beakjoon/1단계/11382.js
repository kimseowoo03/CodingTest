let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let result = input.reduce((a, b) => a + Number(b) , 0)
console.log(result)