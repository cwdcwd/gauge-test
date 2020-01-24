
from getgauge.python import Messages
from getgauge.python import step
from submission import solution


@step("generate fibonacci number <table>")
def generate_fibonacci_number(table):
    assert 1 == solution.calculateFibonacci(1)
    assert 55 == solution.calculateFibonacci(10)


@step("validate fibonacci number <table>")
def validate_fibonacci_number(table):
    print (solution.isFibonacci(9) )
    assert False == solution.isFibonacci(9)
    print (solution.isFibonacci(55) )
    assert True == solution.isFibonacci(55)

