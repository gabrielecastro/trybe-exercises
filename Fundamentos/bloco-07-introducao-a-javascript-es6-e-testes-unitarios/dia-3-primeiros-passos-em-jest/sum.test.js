const { it, expect } = require('@jest/globals');
const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');

/* 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

describe('The function sum', () => {
  it('testa se a funçao existe', () => {
    expect(typeof sum).toBe('function')
  });

  it('testa se retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('testa se retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('testa se a função lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow()
  })

  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});

  /* 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

  describe('The function myRemove', () => {
    it('verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    });
    it('verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ]);
    });
    it('verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
    });
});

/* 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número 
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

describe('The function myFizzBuzz', () => { 
  it('verifica se o retorno é o esperado', () => { 
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('3')).toBe(false);
  });
});

/* 4 - Para as funções encode e decode crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

describe('The function encode', () => { 
  it ('testa se encode é uma função', () => {
    expect(typeof encode).toBe('function')
  });

  it('testa se a vogal "a" é convertida no número 1', () => { 
    expect(encode('ana')).toBe('1n1');
  });

  it('testa se a vogal "e" é convertida no número 2', () => { 
    expect(encode('elen')).toBe('2l2n');
  });

  it('testa se a vogal "i" é convertida no número 3', () => { 
    expect(encode('ingrid')).toBe('3ngr3d');
  });

  it('testa se a vogal "o" é convertida no número 4', () => { 
    expect(encode('ola')).toBe('4l1');
  });

  it('testa se a vogal "u" é convertida no número 5', () => { 
    expect(encode('uva')).toBe('5v1');
  });

  it('testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro', () => { 
    expect(encode('trybe').length).toEqual(5);
  });
});

describe('The function decode', () => { 
  it ('testa se decode é uma função', () => {
    expect(typeof decode).toBe('function')
  });

  it('testa se o número 1 é convertido na vogal "a"', () => { 
    expect(decode('1n1')).toBe('ana');
  });

  it('testa se o número 2 é convertido na vogal "e"', () => { 
    expect(decode('2l2n')).toBe('elen');
  });

  it('testa se o número 3 é convertido na vogal "i"', () => { 
    expect(decode('3ngr3d')).toBe('ingrid');
  });

  it('testa se o número 4 é convertido na vogal "o"', () => { 
    expect(decode('4l1')).toBe('ola');
  });

  it('testa se o número 5 é convertido na vogal "u"', () => { 
    expect(decode('5v1')).toBe('uva');
  });

  it('testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro', () => { 
    expect(decode('3ngr3d').length).toEqual(6);
  });
});

