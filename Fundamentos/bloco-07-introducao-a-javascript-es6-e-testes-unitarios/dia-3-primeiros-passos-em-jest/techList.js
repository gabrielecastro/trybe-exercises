 function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'; 
  }

  const sortedArray = array.sort();
  const tecnologiasList = [];

  for (let i = 0; i < sortedArray.length; i += 1) {
    tecnologiasList.push({
      tech: sortedArray[i],
      name,
    });
  }
  return tecnologiasList;
};

console.log(techList([], 'Lucas'))

module.exports = techList; 