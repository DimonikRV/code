function calc(expression) {
  const [a, operator, b] = expression.split(" ");

  let result = 0;
  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
  }
  return `${expression} = ${result}`;
}

console.log(calc("1 / 2"));
