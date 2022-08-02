# Crie uma função que receba os três lado de um triângulo e informe
# qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def triangle(a, b, c):
    is_triangle = (
      a + b > c and
      a + c > b and
      b + c > a
    )

    if not is_triangle:
        return "Não é triangulo"
    elif a == b == c:
        return "Equilátero"
    elif a == b or b == c or a == c:
        return "Isósceles"
    else:
        return "Escaleno"
