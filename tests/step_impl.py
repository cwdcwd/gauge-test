
from getgauge.python import Messages
from getgauge.python import step
from distutils.util import strtobool
from submission import solution


@step("generate fibonacci number <table>")
def generate_fibonacci_number(table):
    for row in table.rows:
        assert int(row[1]) == solution.calculateFibonacci(int(row[0]))


@step("validate fibonacci number <table>")
def validate_fibonacci_number(table):
    for row in table.rows:
        assert strtobool(row[1]) == solution.isFibonacci(int(row[0]))


