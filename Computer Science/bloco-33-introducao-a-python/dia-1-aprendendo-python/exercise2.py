# Calcule a média aritmética dos valores contidos em uma lista.


def average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)
