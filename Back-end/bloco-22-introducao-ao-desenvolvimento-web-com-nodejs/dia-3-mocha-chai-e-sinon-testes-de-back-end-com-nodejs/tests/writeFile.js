const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const writeFile = require('../exercises/writeFile');
const CONTEUDO_DO_ARQUIVO = 'testando funções';

describe('função writeFile', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  })

  after(() => {
    fs.writeFileSync.restore();
  })

  const resposta = writeFile('arquivo.txt', 'testando funções');

  it('a resposta é uma string', () => {
    expect(resposta).to.be.a('string');
  });

  it('a resposta é igual a "ok"', () => {
    expect(resposta).to.be.equals('ok');
  });
});