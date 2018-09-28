module.exports = function getZerosCount(number) {
  let result = 0;
  let num = number;

  while(num > 5)
  {
    num /= 5;
    result += Math.floor(num);
  }

  return result;
}
