// Check if a number is prime
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Check if a number is an Armstrong number
const isArmstrong = (n) => {
  const digits = n.toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === n;
};

// Check if a number is perfect
const isPerfect = (n) => {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
};

// Calculate the sum of digits
const digitSum = (n) => {
  return n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

module.exports = { isPrime, isArmstrong, isPerfect, digitSum };
