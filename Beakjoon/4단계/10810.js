let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 바구니수 N
let basketCount = Number(input[0].split(" ")[0]);
let basketArray = Array.from({ length: basketCount }, () => 0);

// 2~M개의 줄까지
const lineCount = Number(input[0].split(" ")[1]);

//(2,5,6) -> 2번부터 5번까지 6번 공 넣기
for (let i = 1; i <= lineCount; i++) {
  const [start, end, ball] = input[i].split(" ");
  for (let j = start - 1; j <= end - 1; j++) {
    basketArray[j] = ball;
  }
}
console.log(basketArray.join(" "));
