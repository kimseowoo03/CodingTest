const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

M -= 45;

if(M < 0) {
  M += 60;
  H--;
  if(H === -1){
    H = 23;
  }
}
console.log(H + ' ' + M);
/*
if(M < 45){
  if(H == 0){
    console.log('23' (45 - M));
  }else{
    console.log((H -1) (45 - M));
  }
}else if(M == 45){
  console.log(H);
}else if(M > 45){
  console.log(H (M - 45));
}
*/