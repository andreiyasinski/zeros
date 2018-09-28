module.exports = function getZerosCount(number) {
  let result = 0;
  let num = number;

  while(num > 0)
  {
    num /= 5;
    //console.log(num);
    result += Math.floor(num);
  }

  return result;
}
