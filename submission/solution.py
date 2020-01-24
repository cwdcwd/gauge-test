import math

def calculateFibonacci(n):
  print "calculating for {}".format(n)
  return 0


def isFibonacci(x):
  print "isFibonacci for {}".format(x)

  i = (math.sqrt((5 * (x * x)) - 4))

  if math.trunc(i) == i:
      return True

  i = (math.sqrt((5 * (x * x)) + 4))
  
  if (math.trunc(i) == i):
      return True

  print "done"
  return False
