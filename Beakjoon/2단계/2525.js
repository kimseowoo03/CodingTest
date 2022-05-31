const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let H = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];
let C = +input[1];

M += C;

if(M >= 60) {
  H+= Math.floor(M / 60);
  M %= 60;
  if(H >= 24){
    H -= 24;
  }
}
console.log(H, M);
/*
let H = Number(input[0]);
let M = Number(input[1]);
let C = Number(input[2]);

let MC = M+C; 

if(MC >= 60){
let mcmc = MC / 60
H += mcmc;
MC %= 60
if(H >=24){
H -= 24
}
}
console.log(H + ' ' + MC)

접근법은 좋았으나 연산자의 활용과 조건문 활용이 부족힘.
*/