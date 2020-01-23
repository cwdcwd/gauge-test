
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
  if (Number.isInteger(Math.sqrt((5 * (x * x)) - 4))) {
    return true
  }

  if (Number.isInteger(Math.sqrt((5 * (x * x)) + 4))) {
    return true
  }

  return false
}

module.exports = {
  calculateFibonacci: (n) => {
    return new Promise((fn) => {
      return fn(calc(n))
    })
  },
  isFibonacci: (x) => {
    return new Promise((fn) => {
      return fn(isFibonacci(x))
    })
  }
}