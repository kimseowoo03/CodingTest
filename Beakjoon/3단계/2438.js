const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
let star = ""
for(let i = 1; i<= input; i++){
  star+= "*"
  console.log(star);
}