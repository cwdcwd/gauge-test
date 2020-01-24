
function calc(n) {
  //console.debug(`calc(${n})`)
  let x = n

  if (n > 1) {
    x = calc(n - 1) + calc(n - 2)
  }

  //console.debug(`returning ${x}`)
  return x
}

function isFibonacci(x) {  
  return (Number.isInteger(Math.sqrt((5 * (x * x)) - 4)) || Number.isInteger(Math.sqrt((5 * (x * x)) + 4)))
}

module.exports = {
  calculateFibonacci: (n) => {
   return calc(n)
  },
  isFibonacci: (x) => {
   return isFibonacci(x)
  }
}