function palindromeDescendant(number) {
  if (number < 10) return true;
  if (isPalindrome(number)) {
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

function getDescendant(number) {
  const intArr = Array.from(String(number), (digit) => Number(digit));
  const max = intArr.length - 1;
  result = [];
  for (i = 0; i < max; i += 2) {
    result.push(intArr[i] + intArr[i + 1]);
  }
  return +result.join("");
}

function isPalindrome(number) {
  let remainder,
    final = 0;
  let temp = number;
  let current = number;
  while (current > 0) {
    remainder = current % 10;
    current = parseInt(current / 10);
    final = final * 10 + remainder;
  }
  return final === temp;
}

// TESTS
console.log(palindromeDescendant(23336014));
console.log(palindromeDescendant(11211230));
console.log(palindromeDescendant(11));
console.log(palindromeDescendant(1));
console.log(palindromeDescendant(121233312));
