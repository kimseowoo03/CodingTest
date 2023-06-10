let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let basketCount = Number(input[0].split(" ")[0]);
let basketArray = Array.from({ length: basketCount }, () => 0).map(
  (n, i) => (n = i + 1)
);

const lineCount = Number(input[0].split(" ")[1]);

//(2,5,6) -> 2번부터 5번까지 6번 공 넣기
for (let i = 1; i <= lineCount; i++) {
  const [basketIndex1, basketIndex2] = input[i].split(" ");
  const ballInBasket1 = basketArray[basketIndex1 - 1];
  const ballInBasket2 = basketArray[basketIndex2 - 1];
  basketArray[basketIndex1 - 1] = ballInBasket2;
  basketArray[basketIndex2 - 1] = ballInBasket1;
}
console.log(basketArray.join(" "));
