import math

def calculateFibonacci(n):
  x = n

  if (n > 1):
      x = calculateFibonacci(n - 1) + calculateFibonacci(n - 2)

  return x


def isFibonacci(x):
  i = (math.sqrt((5 * (x * x)) - 4))

  if math.trunc(i) == i:
      return True

  i = (math.sqrt((5 * (x * x)) + 4))
  
  if (math.trunc(i) == i):
      return True

  return False
