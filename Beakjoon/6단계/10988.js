let fs = require("fs");
const letter = fs.readFileSync("/dev/stdin").toString().trim();
console.log(letter === letter.split("").reverse().join("") ? 1 : 0);
