function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  } 

  return a + b;
} 

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let stringCodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        stringCodificada += '1';
        break;
      case 'e':
        stringCodificada += '2';
        break;
      case 'i':
        stringCodificada += '3';
        break;
      case 'o':
        stringCodificada += '4';
        break;
      case 'u':
        stringCodificada += '5';
        break;
      default:
        stringCodificada += string[i]; 
    }
  } 
    return stringCodificada;
}
  
function decode(string) {
  let stringDecodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        stringDecodificada += 'a';
        break;
      case '2':
        stringDecodificada += 'e';
        break;
      case '3':
        stringDecodificada += 'i';
        break;
      case '4':
        stringDecodificada += 'o';
        break;
      case '5':
        stringDecodificada += 'u';
        break;
      default:
        stringDecodificada += string[i]; 
    }
  } 
    return stringDecodificada;
}

console.log(encode('uva'));

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};