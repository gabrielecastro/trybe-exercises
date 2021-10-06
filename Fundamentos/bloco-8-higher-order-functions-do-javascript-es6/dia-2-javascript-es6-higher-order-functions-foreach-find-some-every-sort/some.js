// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some 

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const receiveName = arr.some((currentName) => currentName === name);
  return receiveName;
}

console.log(hasName(names, 'Ana'))