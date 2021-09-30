const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const sum = require('./sum');

/* - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */


  it('testa se a funçao existe', () => {
    expect(typeof sum).toBe('function')
  });
  it('testa se retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('testa se retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  


