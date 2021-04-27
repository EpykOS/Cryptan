
function palindromeDescendant(number): boolean {
  if (number < 10 || isPalindrome(number)) {
    return true;
  } else {
    const descendant = getDescendant(number);
    if (descendant > 10) {
      return palindromeDescendant(descendant);
    } else {
      return false;
    }
  }
}

function getDescendant(number): number {
  let i: number;
  const intArr = Array.from(String(number), (digit) => Number(digit));
  const max = intArr.length - 1;
  const result = [];

  for (i = 0; i < max; i += 2) {
    result.push(intArr[i] + intArr[i + 1]);
  }
  return +result.join("");
}

function isPalindrome(number): boolean {
  let remainder, final = 0;
  let temp = number;
  let current = number;

  while (current > 0) {
    remainder = current % 10;
    current = parseInt(`${current / 10}`);
    final = final * 10 + remainder;
  }
  return final === temp;
}
