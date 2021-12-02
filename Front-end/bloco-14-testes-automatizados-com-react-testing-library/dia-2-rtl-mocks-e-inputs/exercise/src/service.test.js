/* import { returnRandomNumber } from './Service'; */
/* const { test } = require('@jest/globals'); */

function randomNumber() {
  Math.floor(Math.random() * 101);
}

describe('testa returnRandomNumer', () => {
  it('testa se a função é chamada', () => {
    randomNumber = jest.fn();
    randomNumber()
    expect(randomNumber).toHaveBeenCalled();
  })

  it('testa se retorna o número 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10)
  })

  it('testa quantas vezes a função é chamada', () => {
    randomNumber = jest.fn();
    randomNumber();
    randomNumber();
    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(3);
  })
})
