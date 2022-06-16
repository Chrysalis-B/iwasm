export function minusOne(n: i32): i32 {
  const result = n - 1;
  console.log(`${n} minus 1 is ${result}`);
  return result;
}

export function fizzbuzz(n: i32): string {
  let text = ""
  if (n % 15 === 0) {
    text = "fizzbuzz";
  }
  if (n % 3 === 0) {
    text = "fizz";
  }
  if (n %  5 === 0) {
    text = "buzz";
  }
  console.log(`fizzbuzz returned: ${text}`)
  return text;
}