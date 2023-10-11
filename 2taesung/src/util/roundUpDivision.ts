export const roundUpDivision = (dividend: number, divisor: number) => {
  let quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  if (remainder > 0) {
    quotient += 1;
  }

  return quotient;
};
