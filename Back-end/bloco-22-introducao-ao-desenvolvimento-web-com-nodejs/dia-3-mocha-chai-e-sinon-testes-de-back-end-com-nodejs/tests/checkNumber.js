const { expect } = require('chai');

const checkNumber = require('../exercises/checkNumber');

describe('função checkNumber', () => {
  describe('se o número for maior que 0', () => {

    const resposta = checkNumber(4);

    it('retorna uma string', () => {
      expect(resposta).to.be.a('string');
    })
    it('a string tem o valor "positivo"', () => {
      expect(resposta).to.be.equals("positivo");
    })
  });

  describe('se o número for menor que 0', () => {

    const resposta = checkNumber(-4);

    it('retorna uma string', () => {
      expect(resposta).to.be.a('string');
    })
    it('a string tem o valor "negativo"', () => {
      expect(resposta).to.be.equals("negativo");
    })
  });
  
  describe('se o número for igual a 0', () => {

    const resposta = checkNumber(0);

    it('retorna uma string', () => {
      expect(resposta).to.be.a('string');
    })
    it('a string tem o valor "neutro"', () => {
      expect(resposta).to.be.equals("neutro");
    })
  });

  describe('se o valor passado não for um número', () => {

    const resposta = checkNumber("0");

    it('retorna uma string', () => {
      expect(resposta).to.be.a('string');
    })
    it('a string tem o valor "neutro"', () => {
      expect(resposta).to.be.equals("o valor deve ser um número");
    })
  })
})